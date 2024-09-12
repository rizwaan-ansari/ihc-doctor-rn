import {  Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SquircleView } from "react-native-figma-squircle";
import { ms } from "react-native-size-matters";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { AnimatePresence, MotiView } from "moti";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";


import ContainerView from "../components/ContainerView";
import FastImage from 'react-native-fast-image'
import Txt from "../components/Txt";

import LanguageList from "../components/LanguageList";
import Btn from "../components/Btn";
import { useState } from "react";


const SQUIRCLE_ICON_SIZE = ms(120, .25)

export default function LanguageScreen({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    const [selectLanguage, setSelectLanguage] = useState(false);

    const handleLanguageSelect = () => {
        setSelectLanguage(true);
    };

    return (
        <>
            <ContainerView staticView title="Select Language">
                <View className="items-center pt-[42px] px-6">
                    <View className="w-[120] h-[120] relative">
                        <SquircleView
                            className="absolute top-0 left-0 right-0 bottom-0"
                            squircleParams={{
                                cornerSmoothing: 1,
                                cornerRadius: ms(32.25),
                                fillColor: '#D0EEF9',
                            }}
                        />
                        <View className="absolute top-0 left-0 bottom-0 right-0 rounded-[32px] overflow-hidden">
                            <FastImage
                                className="w-full h-full"
                                source={require('./../assets/images/translate-icon.png')}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                    </View>
                    <Txt fontColor="black-50" fontSize={"base"} textAlign={"center"} className="mt-6 leading-[20px]">
                        Select the language for browsing the app. You can change language anytime from profile.
                    </Txt>
                    <LanguageList onLanguageSelect={handleLanguageSelect}/>
                </View>

            </ContainerView>

            <View style={[{marginHorizontal: ms(16,.25)}]}>
                <AnimatePresence>
                    {selectLanguage && <MotiView from={{height: 0, marginTop: ms(0, .25), transform: [{translateY: ms(50, .25)}]}} animate={{height: ms(50, .25), marginTop: ms(16, .25), transform: [{translateY: 0}]}} transition={{duration: 200, type: 'timing',}}>
                        <Btn title="Next" onPress={()=> navigation.navigate('SignUpScreen')}/>
                    </MotiView>}
                </AnimatePresence>
            </View>

            <SafeAreaView />
        </>
    );
}