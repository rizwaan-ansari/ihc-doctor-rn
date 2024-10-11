import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import FastImage, { FastImageProps } from 'react-native-fast-image'
import { ms } from 'react-native-size-matters'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Txt from './UIComponent/Txt'

import {COLOR_PALLETE} from '../utils/ColorConstant'

export type DoctorCardProps = {
    id?: string,
    name?: string,
    about?: string,
    speciality?: string,
    image?: string,
    onPress?: () => void
}
export default function DoctorCard({ name, speciality, image, onPress }: DoctorCardProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.docterCard}>
            <View style={styles.imageContainer}>
                <FastImage
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: image as string }}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <View style={styles.overlayEnd}>
                    <View style={styles.iconWrapper}>
                        <View style={styles.iconContainer}>
                            <FontAwesomeIcon name={'video-camera'} size={ms(10, 0.25)} color={COLOR_PALLETE.BRAND_COLOR} />
                        </View>
                        <View style={styles.iconContainer}>
                            <FontistoIcon name={'map-marker-alt'} size={ms(11, 0.25)} color={COLOR_PALLETE.BRAND_COLOR} />
                        </View>
                    </View>
                </View>
            </View>
            <Txt fontWeight={500} fontSize={"lg"} numberOfLines={1}>{name}</Txt>
            <Txt fontSize={"sm"} fontWeight={700} fontColor={"secondary"} numberOfLines={1}>{speciality}</Txt>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: COLOR_PALLETE.WHITE_COLOR,
        borderRadius: ms(5, .25),
        overflow: 'hidden',
        paddingVertical: ms(1, .25)
    },
    docterCard: {
        width: ms(78, 0.25),
        marginRight: ms(10, 0.25)
    },
    imageContainer: {
        height: ms(88, 0.25),
        width: '100%',
        borderRadius: ms(8, 0.25),
        overflow: 'hidden',
        marginBottom: ms(8, 0.25),
    },
    overlayEnd: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'flex-end',
        padding: ms(3, 0.25),
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    iconContainer: {
        backgroundColor: COLOR_PALLETE.WHITE_COLOR,
        height: ms(18, 0.25),
        width: ms(18, 0.25),
        borderRadius: ms(5, 0.25),
        justifyContent: 'center',
        alignItems: 'center',
    }
})
