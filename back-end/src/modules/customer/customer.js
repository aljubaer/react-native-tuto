import Customer from './customer.model';

import { buildCustomerInfo } from './build_customer_info';

export const getOrCreateCustomer = async (data, provider) => {

    const customerInfo = buildCustomerInfo(data, provider);

    try {
        const _customer = await Customer.findOne({ email: customerInfo.email });

        const { provider, ...userInfo } = customerInfo;

        if (!_customer) {
            const customer = await Customer.create({
                ...userInfo,
                provider: [provider]
            })

            return customer;
        }

        const isProviderExist = _customer.provider.find(el => {
            return el.uid === customerInfo.provider.uid && el.type === customerInfo.provider.type;
        });

        if (isProviderExist) {
            return _customer;
        }

        _customer.provider.push(customerInfo.provider);

        await _customer.save();

        return _customer;
    } catch (error) {
        throw error;
    }
}