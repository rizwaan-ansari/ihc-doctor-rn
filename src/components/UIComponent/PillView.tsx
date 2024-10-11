import React from 'react'
import { StyleSheet, SafeAreaView, View, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
// import { IMG_SELECTED_RADIO_BTN } from '../../assets/images/index';
import FastImage from 'react-native-fast-image';
import { ms } from 'react-native-size-matters';
import Txt from './Txt';
import { COLOR_PALLETE } from '../../utils/ColorConstant'


 const  PillView = (props:any) => (
    <TouchableOpacity onPress={() => props?.onPress ? props?.onPress(props.id) : null} style={[styles.specializationPill, {backgroundColor: props.selected ? COLOR_PALLETE.BRAND_COLOR : COLOR_PALLETE.ACCENT_BACKGOUND_COLOR}, props.containerStyle]}>
        {props.icon && true !== props?.selected &&
            <FastImage
                style={[styles.specializationIcon, props.iconStyle]}
                source={{
                    uri: props.icon
                }}
                resizeMode={FastImage.resizeMode.contain}
            />
        }
        {/* {true === props?.selected &&
            <FastImage
                source={IMG_SELECTED_RADIO_BTN}
                style={[styles.specializationIcon, props.iconStyle]}
                resizeMode={FastImage.resizeMode.contain}
            />
        } */}
        <Txt fontSize={'sm'} fontWeight={500} numberOfLines={1} style={{color: props.selected ? COLOR_PALLETE.WHITE_COLOR : COLOR_PALLETE.PRIMARY_TEXT_COLOR}}>{props.label}</Txt>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    specializationPill: {
        // minWidth: ms(75),
        maxWidth: ms(200, 0.25),
        paddingHorizontal: ms(15, 0.25),
        flexDirection: 'row',
        height: ms(35, 0.25),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: ms(10, 0.25),
        marginBottom: ms(10, 0.25),
        borderRadius: ms(10, 0.25),
        overflow: 'hidden',
        flexShrink: 1,
    },
    specializationIcon: {
        height: ms(20, 0.25),
        width: ms(20, 0.25),
        marginRight: ms(10, 0.25),
    },
    noIcon: {
        height: 0,
        width: 0,
        marginRight: 0,
    }
})

export default PillView;