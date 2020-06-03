import * as Yup from 'yup';

import { PROVIDER_ENUM } from './customer.model';
import { AuthProvider } from '../../services/auth/Facebook';
const facebookAuth = require('../../services/auth/Facebook');
const googleAuth = require('../../services/auth/Google');


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

        if (provider === 'FACEBOOK') {
            const data = await facebookAuth.authAsync(token);

            res.status(201).json(data);
        }

        else if (provider === 'GOOGLE') {
            const data = await googleAuth.authAsync(token);

            res.status(201).json(data);
        } else {
            res.sendStatus(400);
        }

        // 5:00

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}