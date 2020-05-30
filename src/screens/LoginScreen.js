import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Alert, Animated } from 'react-native';

import OnboardingLogo from '../components/OnboardingLogo';
import LoginButton from '../components/LoginButton';

import { images } from '../constants/images';
import { FacebookApi } from '../api/Facebook';

class LoginScreen extends Component {
    state = {
        opacity: new Animated.Value(0)
    };

    componentDidMount() {
        this.opacityAnim();
    }

    opacityAnim = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 200
        }).start();
    }

    onGooglePress = () => {
        Alert.alert('Google press');
    }

    onFacebookPress = async () => {
        try {
            const token = await FacebookApi.loginAsync();

            console.log(token);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { opacity } = this.state;
        return (
            <Box f={1} center bg="white">
                <Animated.View style={{ flex: 1 }}>
                    <Box f={1} center>
                        <OnboardingLogo />
                    </Box>
                </Animated.View>
                <Animated.View style={{ flex: 0.9, width: "100%", opacity }} >
                    <LoginButton onPress={this.onGooglePress} _color="#1976D2" _icon={images.googleColoredLogo} >Login With Google</LoginButton>
                    <LoginButton onPress={this.onFacebookPress} _color="#4D6FA9" _icon={images.googleColoredLogo}>Login With Facebook</LoginButton>
                </Animated.View>
            </Box>
        );
    }
}

export default LoginScreen;