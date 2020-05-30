import * as Facebook from 'expo-facebook';
import Constants from 'expo-constants';

const permissions = ['public_profile', 'email'];

const loginAsync = async () => {
    try {
        await Facebook.initializeAsync(Constants.manifest.facebookAppId);
        const { type, token } = await Facebook.logInWithReadPermissionsAsync({ permissions });

        if (type === 'success') {
            return Promise.resolve(token);
        }

        return Promise.reject('Login failed');
    } catch (error) {
        return Promise.reject(error);
    }
}

export const FacebookApi = {
    loginAsync
}