import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image';
import { ms } from 'react-native-size-matters';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { IMG_FILTER_ICON_2 } from '../assets/images/index';
import { COLOR_PALLETE } from '../utils/ColorConstant';

export default function InputField(props: any) {
    return (
        <View style={[styles.searchBar, props.containerStyle]}>
            <View style={styles.searchIconContainer}>
                <FontAwesomeIcon name={props.search ? 'search' : props.icon} size={props.search ? ms(18, 0.25) : ms(16, 0.25)} color={COLOR_PALLETE.TERTIARY_TEXT_COLOR} />
            </View>
            <TextInput
                style={styles.searchInput}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholderTextColor={props.placeholderTextColor}
                {...props}
            />
            {props.search &&
                <TouchableOpacity style={styles.searchFilterContainer} onPress={props.onPressFilter}>
                    <FastImage
                        style={styles.searchFilterIcon}
                        source={IMG_FILTER_ICON_2}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        height: ms(50, 0.25),
        backgroundColor: COLOR_PALLETE.ACCENT_BACKGOUND_COLOR,
        borderRadius: ms(10, 0.25),
        alignItems: 'center',
        overflow: 'hidden',
        flex: 1,
        // maxWidth: ms(450, 0.25),
    },
    searchIconContainer: {
        paddingLeft: ms(15, 0.25),
        height: '100%',
        justifyContent: 'center',
    },
    searchInput: {
        flex: 1,
        paddingLeft: ms(8, 0.25),
        paddingRight: ms(15, 0.25),
        height: '100%',
        color: COLOR_PALLETE.BRAND_COLOR
    },
    searchFilterContainer: {
        height: '100%',
        paddingRight: ms(17, 0.25),
        justifyContent: 'center',
    },
    searchFilterIcon: {
        width: ms(21, 0.25),
        height: ms(16, 0.25),
    },
})
