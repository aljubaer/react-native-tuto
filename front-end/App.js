import React from 'react';
import { ActivityIndicator } from 'react-native'
import { UtilityThemeProvider, Box, Text } from 'react-native-design-utility';

import Navigation from './src/screens';
import { images } from './src/constants/images';
import { cacheImages } from './src/util/cacheImage';

export default class App extends React.Component {

    state = {
        isReady: false,
    }

    componentDidMount() {
        
    }

    createAssets = async () => {
        const imagesAssets = cacheImages(Object.values(images));

        await Promise.all([...imagesAssets]);

        this.setState({ isReady: true });
    }

    render() {

        if (this.state.isReady) {
            return (
                <Box f={1} center bg="white">
                    <ActivityIndicator size="large" />
                </Box>
            );
        }

        return (
            <UtilityThemeProvider>
                <Navigation />
            </UtilityThemeProvider>

        );
    }

}

