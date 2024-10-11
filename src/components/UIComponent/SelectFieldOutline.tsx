import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ms } from 'react-native-size-matters'
import Txt from './Txt';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { COLOR_PALLETE } from '../../utils/ColorConstant'

export default function SelectFieldOutline(props:any) {
    return (
        <>
             {/*
                gave this condition because selectField should take maximum 
                width available regardless if its parent container has flex 
                direction row or column 
            */}

            { props.group ?
                <TouchableOpacity style={[styles.selectField, props.containerStyle]}>
                    <View style={styles.left}>
                        <Txt fontWeight={600} fontColor={'brand'}>{props.value}</Txt>
                    </View>
                    <View style={styles.right}>
                        <FontAwesomeIcon 
                            name={'chevron-down'}
                            size={ms(12)}
                            color={COLOR_PALLETE.TERTIARY_TEXT_COLOR}
                        />
                    </View>
                    <Txt fontSize={'xs'} numberOfLines={1} fontColor={'tertiary'} fontWeight={600} style={styles.label}>ISD Code</Txt>
                </TouchableOpacity>
                :
                <View style={styles.directionRow}>
                    <TouchableOpacity style={[styles.selectField, props.containerStyle]}>
                        <View style={styles.left}>
                            <Txt fontWeight={600} fontColor={'brand'} numberOfLines={1}>+{props.value}</Txt>
                        </View>
                        <View style={styles.right}>
                            <FontAwesomeIcon 
                                name={'chevron-down'}
                                size={ms(12)}
                                color={COLOR_PALLETE.TERTIARY_TEXT_COLOR}
                            />
                        </View>
                        <Txt fontSize={'xs'} numberOfLines={1} fontColor={'tertiary'} fontWeight={600} style={styles.label}>ISD Code</Txt>
                    </TouchableOpacity>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    directionRow: {
        flexDirection: 'row',
    },
    selectField: {
        flex: 1,
        height: ms(50),
        borderRadius: 5,
        paddingHorizontal: ms(7.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: COLOR_PALLETE.ACCENT_BORDER_COLOR,
        borderWidth: 1.5,
    },
    left: {
        paddingHorizontal: ms(7.5),
    },
    right: {
        paddingHorizontal: ms(7.5),
    },
    label: {
        position: 'absolute',
        left: ms(12),
        top: ms(-6),
        backgroundColor: COLOR_PALLETE.WHITE_COLOR,
        paddingHorizontal: ms(3),
    }
})
