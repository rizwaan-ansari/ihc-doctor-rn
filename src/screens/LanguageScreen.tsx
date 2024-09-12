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
                <View style={styles.contentContainer}>
                    <View style={styles.headerIconWrapper}>
                        <SquircleView
                            style={styles.headerIconSquircle}
                            squircleParams={{
                                cornerSmoothing: 1,
                                cornerRadius: ms(32.25),
                                fillColor: '#D0EEF9',
                            }}
                        />
                        <View style={styles.headerIconContainer}>
                            <FastImage
                                style={styles.headerIcon}
                                source={require('./../assets/images/translate-icon.png')}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                    </View>
                    <Txt fontColor="black-50" fontSize={"base"} textAlign={"center"} style={styles.screenText}>
                        Select the language for browsing the app. You can change language anytime from profile.
                    </Txt>
                    <LanguageList onLanguageSelect={handleLanguageSelect}/>
                </View>

            </ContainerView>

            <View style={[{marginHorizontal: ms(16,.25)}]}>
                <AnimatePresence>
                    {selectLanguage && <MotiView from={{height: 0, marginTop: ms(0, .25), transform: [{translateY: ms(50, .25)}]}} animate={{height: ms(50, .25), marginTop: ms(16, .25), transform: [{translateY: 0}]}} transition={{duration: 200, type: 'timing',}}>
                        <Btn title="Next" onPress={()=> navigation.navigate('HomeStackNavigator')}/>
                    </MotiView>}
                </AnimatePresence>
            </View>

            <SafeAreaView />
        </>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        paddingTop: ms(42, .25),
        paddingHorizontal: ms(24, .25),
    },
    headerIconWrapper: {
        width: SQUIRCLE_ICON_SIZE,
        height: SQUIRCLE_ICON_SIZE,
        position: 'relative',
    },
    headerIconContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: ms(32, .25),
        overflow: 'hidden'
    },
    headerIconSquircle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    headerIcon: {
        width: '100%',
        height: '100%'
    },
    screenText: {
        marginTop: ms(24, .25),
        lineHeight: ms(20, .25)
    },
})