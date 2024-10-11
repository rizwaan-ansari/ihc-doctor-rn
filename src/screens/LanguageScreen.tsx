import React from "react";
import { useReducer, useState } from "react"; 
import { I18nManager, SafeAreaView, View } from "react-native"; 
import { NavigationProp, ParamListBase } from "@react-navigation/native"; 

import FastImage from 'react-native-fast-image'; 
import { AnimatePresence, MotiView } from "moti";
import { SquircleView } from "react-native-figma-squircle";
import { ms } from "react-native-size-matters";

import ContainerView from "../components/ContainerView"; 
import Txt from "../components/UIComponent/Txt";
import Btn from "../components/UIComponent/Btn";
import LanguageList from "../components/LanguageList";
import { useTranslation } from "react-i18next";
import useLocale from "../hooks/useLocale";


interface State {
    selectedLocale: 'ar' | 'en';
}
const SQUIRCLE_ICON_SIZE = ms(120, .25)

export default function LanguageScreen({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    const [selectLanguage, setSelectLanguage] = useState(false);
    const { t } = useTranslation(["register", "common"])
    const [state] = useReducer((state: State, newState: Partial<State>): State => ({...state, ...newState}), {
        selectedLocale: I18nManager.isRTL ? 'ar' : 'en'
    });

    const handleLanguageSelect = () => {
        setSelectLanguage(true);
    };

    return (
        <>
            <ContainerView staticView title={"register:select_language"}>
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
                        {t("register:select_the_language_for_browsing_the_app_you_can_change_language_anytime_from_profile")}
                    </Txt>
                    <LanguageList onLanguageSelect={handleLanguageSelect}/>
                </View>

            </ContainerView>
            <View style={[{marginHorizontal: ms(16,.25)}]}>
                <Btn title={"common:next"} onPress={()=> navigation.navigate('SignUpScreen')}/>
            </View>

            <SafeAreaView />
        </>
    );
}