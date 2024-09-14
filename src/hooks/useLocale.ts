import { useState } from "react";
import { I18nManager } from "react-native";

export default function useLocale() {
    const [locale, setLocale] = useState<'ar' | 'en'>(I18nManager.isRTL ? 'ar' : 'en')
    return { locale, setLocale }
}