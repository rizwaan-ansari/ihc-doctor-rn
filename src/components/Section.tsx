import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import Txt from "./UIComponent/Txt";
import {COLOR_PALLETE} from '../utils/ColorConstant'
import { ms } from "react-native-size-matters";

type SectionParams = {
    title?: string,
    btnText?: string,
    unsetInnerSpacing?: boolean,
    removeMarginTop?: boolean,
    style?: StyleProp<ViewStyle>,
    rootStyle?: StyleProp<ViewStyle>,
    onPress?: () => void,
    children: React.ReactNode
}
export const Section = ({title, btnText, unsetInnerSpacing, removeMarginTop, style, rootStyle, onPress, children}: SectionParams) => {
    return(
        <View style={[styles.sectionContainer, {marginTop: removeMarginTop ? 0 : ms(16, .25)}, rootStyle]}>
            {title && 
                <View style={styles.sectionHeaderContainer}>
                    <Txt fontSize={"xl"} fontWeight={700}>{title ? title : 'Enter Title'}</Txt>
                    <TouchableOpacity onPress={onPress}>
                        {btnText && 
                            <TouchableOpacity>
                                <Txt fontColor={"secondary"} textDecoration={"underline"} fontSize={"sm"}>{btnText ? btnText : 'View All'}</Txt>
                            </TouchableOpacity>
                        }
                    </TouchableOpacity>
                </View>
            }
            <View className="py-4" style={[{paddingVertical: unsetInnerSpacing ? 0 : ms(16, .25), paddingHorizontal: unsetInnerSpacing ? 0 : ms(16, .25) }, style ]}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionBodyContainer: {
        paddingHorizontal: ms(16, .25),
        paddingVertical: ms(16, .25),
    },
    sectionHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: ms(16, .25),
        paddingTop: ms(16, .25)
    },
    sectionContainer: {
        backgroundColor: COLOR_PALLETE.WHITE_COLOR,
        borderRadius: ms(8, .25),
        marginHorizontal: ms(16, .25),
        marginTop: ms(16, .25)
    },
})