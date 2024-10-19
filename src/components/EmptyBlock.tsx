import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IMG_EMPTY_ICON } from '../assets/images/index'
import Txt from './UIComponent/Txt';
import FastImage from 'react-native-fast-image';
import { ms } from 'react-native-size-matters';

export default function EmptyBlock(props:any) {
    return (
        <View style={[styles.emptyScrenBlock, props.containerStyle]}>
            <FastImage
                style={[styles.emptyScreenIcon, props.imageStyle]}
                source={props.image ? props.image :IMG_EMPTY_ICON}
                resizeMode={FastImage.resizeMode.cover}
            />
            <Txt fontWeight={700} style={styles.emptyTitle}>{props.title}</Txt>
            <Txt fontSize={'sm'} style={styles.emptySubtitle}>{props.subtitle}</Txt>
        </View>
    )
}

const styles = StyleSheet.create({
    emptyScrenBlock: {
        marginBottom: ms(100),
        alignItems: 'center',
        maxWidth: ms(220),
        textAlign: 'center',
    },
    emptyTitle: {
        textAlign: 'center',
        marginBottom: ms(5)
    },
    emptySubtitle: {
        textAlign: 'center',
    },
    emptyScreenIcon: {
        height: ms(85),
        width: ms(85),
        marginBottom: ms(15)
    },
})
