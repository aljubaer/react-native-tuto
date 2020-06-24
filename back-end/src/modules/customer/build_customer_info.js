export const buildCustomerInfo = (info, providerName) => {
    let user = {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        avatarUrl: '',
        provider: {
            uid: '',
            type: ''
        }
    }

    if (providerName === 'GOOGLE') {
        user.email = info.email;
        user.firstName = info.given_name;
        user.lastName = info.family_name;
        user.avatarUrl = info.picture;
        user.id = info.id;
        user.provider.uid = info.id;
        user.provider.type = providerName;
    } else if (providerName === 'FACEBOOK') {
        const [firstName, ...lastName] = info.name;

        user.firstName = firstName;
        user.lastName = lastName.join(' ');
        user.id = info.id;
        user.avatarUrl = info.picture.data.url;
        user.provider.uid = info.id;
        user.email = info.email;
        user.provider.type = providerName;
    }
    return user;
}