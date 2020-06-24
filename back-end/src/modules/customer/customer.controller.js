import * as Yup from 'yup';

import { PROVIDER_ENUM } from './customer.model';
import { AuthProvider } from '../../services';
const facebookAuth = require('../../services/auth/Facebook');
const googleAuth = require('../../services/auth/Google');

import { getOrCreateCustomer } from './customer';
import { AuthServices } from '../../services/Auth';

export const create = async (req, res) => {
    const { token, provider } = req.body;

    const bodySchema = Yup.object().shape({
        token: Yup.string().required(),
        provider: Yup.string()
            .oneOf(PROVIDER_ENUM)
            .required(),
    });

    try {
        await bodySchema.validate({ token, provider });

        let data;

        if (provider === 'FACEBOOK') {
            data = await facebookAuth.authAsync(token);
        }

        else if (provider === 'GOOGLE') {
            data = await googleAuth.authAsync(token);

        } else {
            res.sendStatus(400).json({ message: 'Token or provider not validated!' });
        }

        console.log(data);

        const customer = await getOrCreateCustomer(data, provider);

        const jwtToken = AuthServices.createToken(customer);

        res.status(200).json({ token: jwtToken });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}