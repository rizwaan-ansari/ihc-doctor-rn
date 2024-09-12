import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { IMG_LANGUAGE_FLAG_1, IMG_LANGUAGE_FLAG_2 } from '../assets/images'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { trigger } from 'react-native-haptic-feedback';
import FastImage from 'react-native-fast-image';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import { ms } from 'react-native-size-matters';
import { SquircleView } from 'react-native-figma-squircle';



type Props = {
    onLanguageSelect: (id: number) => void
}

const LANGUAGES = [
    {
        id: 0,
        key: 'english',
        title: 'English',
        icon: IMG_LANGUAGE_FLAG_1
    },
    {
        id: 1,
        key: 'arabic',
        title: 'Arabic',
        icon: IMG_LANGUAGE_FLAG_2
    }
]

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function LanguageList({onLanguageSelect}:Props) {
    const [selectedLanguage, setSelectedLanguage] = useState<number | null>(null);

    const scales = LANGUAGES.map((_,index) => useSharedValue(0));
    const languageItemScales = LANGUAGES.map(() => useSharedValue(1));
    const languageItemBackgroundOpacities = LANGUAGES.map(() => useSharedValue(0));

    const handlePress = (id: number) => {
        if (selectedLanguage !== null) {
            scales[selectedLanguage].value = withTiming(0, { duration: 300 });
        }
        setSelectedLanguage(id);
        scales[id].value = withSpring(1, { damping: 8, stiffness: 120, });
        onLanguageSelect(id); 
    };
    return (
        <View className='mt-8 w-full'>
            {LANGUAGES.map((language, index) => {
                const isSelected = selectedLanguage === language.id

                const animatedStyles = useAnimatedStyle(() => {
                    return {
                        transform: [{ scale: scales[index].value }],
                    };
                });

                const animatedText = useAnimatedStyle(() => {
                    return {
                        color: isSelected ? withTiming('#370060', { duration: 600 }) : withTiming('rgba(0,0,0,0.5)', { duration: 600 })
                    };
                });
                const animatedTouchebleStyle = useAnimatedStyle(() => {
                    return {
                        transform: [{ scale: withTiming(languageItemScales[index].value) }],
                    };
                });
                const animatedLanguageItemUnderaly = useAnimatedStyle(() => {
                    return {
                        opacity: languageItemBackgroundOpacities[index].value
                    };
                });

                const onPressIn = () => {
                    languageItemScales[index].value = 0.9;
                    languageItemBackgroundOpacities[index].value = withTiming(1, { duration: 300 });
                    trigger();
                }
                const onPressOut = () => {
                    languageItemScales[index].value = 1;
                    languageItemBackgroundOpacities[index].value = withTiming(0, { duration: 300 });
                }


                return (
                    <AnimatedPressable
                        onPressIn={onPressIn}
                        onPressOut={onPressOut}
                        key={index.toString()}
                        className={"flex-row justify-between py-[18px] items-center relative"}
                        style={[animatedTouchebleStyle, { borderBottomWidth: index === LANGUAGES.length - 1 ? 0 : ms(1, .25),borderColor:'#F6F6F6' }]}
                        onPress={() => handlePress(language.id)}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View className='h-3 w-[18px] mr-[10px]'>
                                <FastImage
                                    style={{ width: '100%', height: '100%' }}
                                    source={language.icon}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                            <Animated.Text className={"text-base text-black50 font-semibold"} style={[animatedText]}>{language.title}</Animated.Text>
                        </View>
                        <Animated.View style={[animatedStyles]}>
                            <OcticonsIcon name="check" size={ms(20, .25)} color={'#370060'} />
                        </Animated.View>

                        <Animated.View className={"absolute top-0 left-0 bottom-0 right-0 z-[-1]"} style={[animatedLanguageItemUnderaly]}>
                            <SquircleView
                                style={{ height: '100%', width: '100%' }}
                                squircleParams={{
                                    cornerSmoothing: 1,
                                    cornerRadius: ms(16.25),
                                    fillColor: '#f1f1f1',
                                }}
                            />
                        </Animated.View>
                    </AnimatedPressable>
                )
            })}
        </View>
    )
}