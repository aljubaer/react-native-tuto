import React, { Component } from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
    navigationOption
} from 'react-navigation';
import LoginScreen from './LoginScreen';

const AuthNatigator = createStackNavigator(
    {
        Login: {
            getScreen: () => require('./LoginScreen').default,

        },
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

const TabNavigator = createBottomTabNavigator({
    Home: {
        getScreen: () => require('./HomeScreen').default
    }
});

const MainNavigator = createStackNavigator({
    Tab: TabNavigator
});

const AppNavigator = createSwitchNavigator(
    {
        Splash: {
            getScreen: () => require('./SplashScreen').default
        },
        Auth: AuthNatigator,
        Main: MainNavigator
    },
    {
        initialRouteName: 'Splash'
    }

)

class Navigation extends Component {
    state = {};
    render() {
        return <AppNavigator />
    }
}

export default Navigation;