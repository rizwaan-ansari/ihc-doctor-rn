import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle, Platform } from "react-native";

import { ms } from "react-native-size-matters";
import FeatherIcon from 'react-native-vector-icons/Feather';


import Txt from "./Txt";
import Btn from "./Btn";
import { COLOR_PALLETE } from "../utils/ColorConstant";

type Props = {
    children?: React.ReactNode;
    staticView?: boolean,
    hideBackButton?: boolean,
    hideTitle?: boolean,
    title?: string,
    withoutBottomTabs?: boolean,
    bodyStyle?: StyleProp<ViewStyle>,
    bottomButton?: string,
    bottomBtnPress?: ()=> void,
    renderBottomBar?: React.ReactNode,
    bottomBtnGroup?: boolean,
    bottomBtnGroupStyle?: Object,
    onPressPrimary?: ()=> void,
    onPressSecondary?: ()=> void,

}

const TABBAR_HEIGHT = ms(52, .25)
const SPACING = ms(16, .25)
const BACK_BUTTON_SIZE = ms(35, .25)

const ContainerView: React.FC<Props> = ({
    children, 
    title, 
    staticView, 
    withoutBottomTabs, 
    bodyStyle,
    bottomButton,
    bottomBtnPress,
    hideBackButton,
    hideTitle,
    renderBottomBar,
    bottomBtnGroup,
    onPressSecondary,
    onPressPrimary,
    bottomBtnGroupStyle
}) => {
    const navigation = useNavigation()

    if(staticView === true) {
        return(
            <SafeAreaView style={styles.staticSafeAreaView}>
                {!hideBackButton && !hideTitle && 
                    <View style={styles.headerContainer}>
                        {!hideTitle &&
                            <Txt fontSize={"2xl"} fontWeight={700}>
                                {title}
                            </Txt>
                        }

                        {!hideBackButton &&
                            <TouchableOpacity style={styles.staticViewBackBtn}>
                                <Text>
                                    <FeatherIcon name="chevron-left" size={ms(24, .25)}/>
                                </Text>
                            </TouchableOpacity>
                        }
                    </View>
                }
                <View style={[styles.staticViewContentContainer, bodyStyle]}>
                    {children}
                </View>
            </SafeAreaView>
        )
    }
    
    return (
        <View style={styles.staticSafeAreaView}>
            <SafeAreaView/>
            <View style={{flex: 1, position: 'relative'}}>
                {title && 
                    <View style={styles.headerContainer}>
                        <Txt fontSize="2xl" fontWeight={700}>
                            {title}
                        </Txt>

                        {!hideBackButton && 
                            <TouchableOpacity style={styles.staticViewBackBtn}>
                                <Text>
                                    <FeatherIcon name="chevron-left" size={ms(24, .25)}/>
                                </Text>
                            </TouchableOpacity>
                        }

                        <TouchableOpacity style={styles.staticViewBackBtn} onPress={()=> navigation.goBack()}>
                            <Text>
                                <FeatherIcon name="chevron-left" size={ms(24, .25)}/>
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
                <ScrollView 
                    style={{ flex: 1, backgroundColor: '#F5F5F5'}}
                    contentContainerStyle={{paddingBottom: ms(8, .25),}}
                >
                    {children}
                </ScrollView>
            </View>
            { bottomButton &&
                <>
                    <View style={styles.bottomBtnContainer}>
                        <Btn title={`${bottomButton ? bottomButton : 'CONTINUE'}`} onPress={bottomBtnPress}/>
                    </View>
                    <SafeAreaView/>
                </>
            }
            { (bottomBtnGroup || bottomBtnGroupStyle) && 
                <View style={styles.directionRow}>
                    <View style={[styles.BtnGroupContainer, bottomBtnGroupStyle]}>
                        <TouchableOpacity style={styles.secondarybtn} onPress={onPressSecondary}>
                            <Txt fontColor={"secondary"} fontSize={"sm"} fontWeight={700}>{("Cancel")}</Txt>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.primarybtn} onPress={onPressPrimary}>
                            <Txt fontColor={"brand-light"} fontSize={"sm"} fontWeight={700}>{("Save")}</Txt>
                        </TouchableOpacity>
                    </View>
                </View>
                }
        </View>
    );
}

const styles = StyleSheet.create({
    staticSafeAreaView: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    },
    headerContainer: {
        marginHorizontal: SPACING,
        minHeight: BACK_BUTTON_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING - ms(2, .25),
        position: 'relative'
    },
    headerTitle: {
        fontSize: ms(22, .25),
        fontWeight: '800',
        color: '#333'
    },
    staticViewContentContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: SPACING,
        borderRadius: ms(8, .25),
        overflow: 'hidden'
    },
    staticViewBackBtn: {
        width: BACK_BUTTON_SIZE,
        height: BACK_BUTTON_SIZE,
        borderRadius: ms(8, .25),
        backgroundColor: 'rgba(99,199,236,.3)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: 0
    },
    bottomBtnContainer: {
        paddingHorizontal: ms(16, .25),
    },
    directionRow: {
        flexDirection: 'row',
        backgroundColor: COLOR_PALLETE.WHITE_COLOR,
    },
    BtnGroupContainer: {
        // marginBottom: ms(15, 0.25),
        flexDirection: 'row',
        flex: 1,
        marginTop: ms(1, 0.25),
        paddingHorizontal: ms(7.5, 0.25),
    },
    secondarybtn: {
        height: ms(46, 0.25),
        paddingHorizontal: ms(15, 0.25),
        minWidth: ms(85, 0.25),
        backgroundColor: COLOR_PALLETE.WHITE_COLOR,
        borderRadius: ms(10, 0.25),
        marginHorizontal: ms(7.5, 0.25),
        justifyContent: 'center',
        alignItems: 'center',
    },
    primarybtn: {
        height: ms(46, 0.25),
        paddingHorizontal: ms(15, 0.25),
        flexGrow: 1,
        backgroundColor: COLOR_PALLETE.BRAND_COLOR,
        borderRadius: ms(10, 0.25),
        marginHorizontal: ms(7.5, 0.25),
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default ContainerView;
