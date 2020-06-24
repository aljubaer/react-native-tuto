import { logInAsync } from 'expo-google-app-auth';
import Constants from 'expo-constants';


const scopes = ['profile', 'email'];


export const loginAsync = async () => {
    try {
        const result = await logInAsync({
            androidClientId: Constants.manifest.extra.googleAppId.android,
            scopes
        });


        if (result.type === 'success') {
            console.log(result.accessToken);
            return Promise.resolve(result.accessToken);
        }


        return Promise.reject('No success');
    } catch (error) {
        return Promise.reject(error);
    }
};


export const GoogleApi = {
    loginAsync
};