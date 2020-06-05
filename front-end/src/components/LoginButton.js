import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image, TouchableOpacity, Animated } from 'react-native';

import { images } from '../constants/images';

const LoginButton = ({ children, _color = "blue", _icon = "", onPress }) => (
    <TouchableOpacity
        onPress={onPress}
    >
        <Box
            dir="row"
            align="center"
            shadow={1}
            bg={_color}
            w="80%"
            self="center"
            radius="xs"
            p="xs"
            mb="sm"
        >
            <Box mr="sm">
                <Box
                    bg="white"
                    h={32}
                    w={32}
                    radius={2}
                    center
                >
                    <Image source={_icon} />
                </Box>
            </Box>
            <Box>
                <Text
                    color="white"
                    size="md"
                >
                    {children}
                </Text>
            </Box>

        </Box>
    </TouchableOpacity>
);

export default LoginButton;