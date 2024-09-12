import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, { SharedValue, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { ms } from 'react-native-size-matters';
import { SquircleView } from 'react-native-figma-squircle';
import Txt from './Txt';
import { trigger } from 'react-native-haptic-feedback';
import { COLOR_PALLETE } from '../utils/ColorConstant';

type ButtonType = 'default' | 'variant-2';

type Props = {
    onPress?: ()=> void,
    onLongPress?: ()=> void,
    title: string,
    type?: ButtonType
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
export default function Btn({onPress, onLongPress, title, type = 'default'}: Props) {
    const scale = useSharedValue(1);

    const onPressIn = () => {
        scale.value = 0.9;
        trigger()
    }
    const onPressOut = () => {
        scale.value = 1;

    }

    const animatedButtonContainerStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: withSpring(scale.value, {damping: 10, stiffness: 300}) }],
        };
    });

    const buttonColor = () => {
        if(type === 'default') {
            return COLOR_PALLETE.BRAND_COLOR
        } else if(type === 'variant-2') {
            return COLOR_PALLETE.BRAND_LIGHT_COLOR
        }
    }

    const TextColor = () => {
        if(type === 'default') {
            return "white"
        } else if(type === 'variant-2') {
            return "brand"
        }
    }

    return (
        <AnimatedPressable 
            style={[styles.buttonContainer, animatedButtonContainerStyle]}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Txt fontColor={TextColor()} fontWeight={700}>{title}</Txt>

            <View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: -1}}>
                <SquircleView
                    style={{ height: '100%', width: '100%',}}
                    squircleParams={{
                        cornerSmoothing: 1,
                        cornerRadius: ms(10.25),
                        fillColor: buttonColor(),
                    }}
                />
            </View>
        </AnimatedPressable>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: ms(16, .25),
        width: '100%', 
        justifyContent: 'center',
        alignItems: 'center',
        height: ms(50, .25),
        overflow: 'hidden'
    }
})