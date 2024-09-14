import React from 'react'
import { Text, TextStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import {COLOR_PALLETE} from '../utils/ColorConstant'
import { useTranslation } from 'react-i18next';


    type fontSize = 'xxs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
    type fontWeight = 300 | 400 | 500 | 600 | 700 | 800 | 900;
    type fontColor = 'dark' | 'primary' | 'secondary' | 'tertiary' | 'white' | 'brand-light' | 'brand' | 'secondary-brand-3' | 'danger' | 'warning' | 'success' | 'white-80' | 'white-60' | 'white-50' | 'white-30' | 'black-50' | 'brand-40' | 'brand-60';
    type textAlign= 'left' | 'center' | 'right';
    type numberOfLines = number;
    type textTransform = "uppercase" | "lowercase" | "capitalize";
    type textDecoration = "underline" | "none";


interface TxtProps {
    fontSize?: fontSize,
    fontColor?: fontColor,
    fontWeight?: fontWeight,
    textAlign?: textAlign,
    style?: TextStyle | TextStyle[],
    textTransform?: textTransform,
    textDecoration?: textDecoration,
    className?: string,
    numberOfLines?: numberOfLines,
    children: string | string[]
}

const FONT_SIZE_MAPPER: Record<fontSize, { size: number, lineHeight: number }> = {
    'xxs': {
        size: ms(8, 0.25),
        lineHeight: ms(10, 0.25)
    },
    'xs': {
        size: ms(10, 0.25),
        lineHeight: ms(12, 0.25)
    },
    'sm': {
        size: ms(12, 0.25),
        lineHeight: ms(14, 0.25),
    },
    'base': {
        size: ms(14, 0.25),
        lineHeight: ms(16.5, 0.25),
    },
    'lg': {
        size: ms(16, 0.25),
        lineHeight: ms(18.75, 0.25),
    },
    'xl': {
        size: ms(18, 0.25),
        lineHeight: ms(21, 0.25),
    },
    '2xl': {
        size: ms(20, 0.25),
        lineHeight: ms(23.5, 0.25),
    },
    '3xl': {
        size: ms(24, 0.25),
        lineHeight: ms(33.3, 0.25)
    },
    '4xl' : {
        size: ms(30, 0.25),
        lineHeight: ms(35, 0.25)
    }
}; 
const FONT_COLOR_MAPPER: Record<fontColor, string> = {
    'dark': COLOR_PALLETE.BLACK_COLOR,
    'secondary': COLOR_PALLETE.SECONDARY_TEXT_COLOR,
    'tertiary': COLOR_PALLETE.TERTIARY_TEXT_COLOR,
    'white': COLOR_PALLETE.WHITE_COLOR,
    'brand-light': COLOR_PALLETE.BRAND_LIGHT_COLOR,
    'brand': COLOR_PALLETE.BRAND_COLOR,
    'secondary-brand-3': COLOR_PALLETE.SECONDARY_BRAND_COLOR_3,
    'danger': COLOR_PALLETE.DANGER_COLOR,
    'warning': COLOR_PALLETE.WARNING_COLOR,
    'success': COLOR_PALLETE.SUCCESS_COLOR,
    'white-80': COLOR_PALLETE.WHITE_COLOR_80,
    'white-60': COLOR_PALLETE.WHITE_COLOR_60,
    'white-50': COLOR_PALLETE.WHITE_COLOR_50,
    'white-30': COLOR_PALLETE.WHITE_COLOR_30,
    'black-50': COLOR_PALLETE.BLACK_COLOR_50,
    'brand-40': COLOR_PALLETE.BRAND_COLOR_40,
    'brand-60': COLOR_PALLETE.BRAND_COLOR_60,
    'primary': COLOR_PALLETE.PRIMARY_TEXT_COLOR,
}; 
const FONT_WEIGHT_MAPPER: Record<fontWeight, string> = {
    300: "SF-Pro-Display-Ultralight",
    400: "SF-Pro-Display-Regular",
    500: "SF-Pro-Display-Medium",
    600: "SF-Pro-Display-Semibold",
    700: "SF-Pro-Display-Bold",
    800: "SF-Pro-Display-Heavy",
    900: "SF-Pro-Display-Black"
};

export default function Txt({fontColor="primary", fontSize="base", fontWeight=400, textAlign= "left", numberOfLines, children, style, className, textDecoration, textTransform}: TxtProps) {
    const styleProps = {
        fontFamily: FONT_WEIGHT_MAPPER[fontWeight], 
        fontSize: FONT_SIZE_MAPPER[fontSize].size,
        color: FONT_COLOR_MAPPER[fontColor], 
        fontWeight: fontWeight, 
        textAlign: textAlign, 
        lineHeight: FONT_SIZE_MAPPER[fontSize].lineHeight,
        textDecoration: textDecoration,
        textTransform: textTransform,
    }
    const { t } = useTranslation();
    return (
        <Text style={[styleProps, style]}  numberOfLines={numberOfLines} className={className}>
            {t(children)}
        </Text>
    )
}

