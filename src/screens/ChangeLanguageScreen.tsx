import React, { useReducer } from 'react'
import { StyleSheet, View, TouchableOpacity, I18nManager } from 'react-native'
import { ms } from 'react-native-size-matters'
import Txt from '../components/UIComponent/Txt'
import ContainerView from '../components/ContainerView'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { COLOR_PALLETE } from '../utils/ColorConstant'
import { useTranslation } from 'react-i18next';
import { useNavigation } from "@react-navigation/native";


const LANGUAGES = [
    {
        id: 'en',
        language: 'English'
    },
    {
        id: 'ar',
        language: 'عربي',
    },
];

export default function ChangeLanguageScreen(props: any) {
    const { t } = useTranslation(['account', 'common']);
    const navigation = useNavigation()
    const [state, setState] = useReducer((state: any, newState: any) => ({ ...state, ...newState }), {
        selectedLocale: 'en',
    });
    const didPressLanguageItem = (item: any) => {
        setState({ selectedLocale: item.id });
        I18nManager.forceRTL('ar' === item.id);
    }
    return (
        <ContainerView title={t("account:language")} bottomButton={t("common:save")} onPressPrimary={() => navigation.goBack()}>
            <View style={styles.languagesContainer}>
                {LANGUAGES.map((item) => {
                    return (
                        <TouchableOpacity key={"languages" + item.id.toString()} style={styles.languageCard} onPress={() => didPressLanguageItem(item)}>
                            <Txt fontWeight={600} style={{ color: item.id === state.selectedLocale ? COLOR_PALLETE.BRAND_COLOR : COLOR_PALLETE.SECONDARY_TEXT_COLOR }}>{item.language}</Txt>
                            <AntDesignIcon name={item.id === state.selectedLocale ? 'checkcircle' : 'checkcircleo'} size={item.id === state.selectedLocale ? ms(18, 0.25) : ms(17, 0.25)} color={item.id === state.selectedLocale ? COLOR_PALLETE.BRAND_LIGHT_COLOR : COLOR_PALLETE.TERTIARY_TEXT_COLOR} />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </ContainerView>
    )
}

const styles = StyleSheet.create({
    languagesContainer: {
        paddingHorizontal: ms(7.5, 0.25),
    },
    languageCard: {
        flexDirection: 'row',
        height: ms(50, 0.25),
        flex: 1,
        borderBottomWidth: ms(1, 0.25),
        borderColor: COLOR_PALLETE.ACCENT_BORDER_COLOR,
        marginHorizontal: ms(7.5, 0.25),
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
