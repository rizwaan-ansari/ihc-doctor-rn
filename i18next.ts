import { I18nManager } from "react-native";
import RNRestart from "react-native-restart"
import i18n from "i18next"
import { initReactI18next } from "react-i18next";
import { Resource } from "i18next";
import { storage } from "./src/service/Storage";
import commonEN from "./locales/en/common"
import commonAR from "./locales/ar/common"
import registerEN from "./locales/en/register"
import registerAR from "./locales/ar/register"

interface Resources extends Resource {
    common: typeof commonEN;
    register: typeof registerEN;
}

const resources: Record<string, Resources> = {
    en: {
        common: commonEN,
        register: registerEN
    },
    ar: {
        common: commonAR,
        register: registerAR
    }
}

let locale: string = I18nManager.isRTL ? 'ar' : 'en';
if (!storage.contains('locale')) {
    storage.set('locale', locale)
} else {
    const storedLocale = storage.getString('locale');
    if (storedLocale) {
        locale = storedLocale;
    }
}
if (locale === 'ar' && !I18nManager.isRTL) {
    I18nManager.forceRTL(true);
    RNRestart.Restart();
}
if (locale === 'en' && I18nManager.isRTL) {
    I18nManager.forceRTL(false);
    RNRestart.Restart();
}

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: locale,
        fallbackLng: 'en',
        supportedLngs: ['en', 'ar'],
        ns: [
            "common",
            "register"
        ],
        defaultNS: "common",
        interpolation: {
            escapeValue: false
        }
    });


export default i18n;

