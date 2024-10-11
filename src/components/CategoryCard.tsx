import React from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import FastImage, { FastImageProps } from 'react-native-fast-image'
import { ms } from 'react-native-size-matters'
import Txt from './UIComponent/Txt'

export type CategoryItemProps = {
    id: number,
    title?: string,
    style?: StyleProp<ViewStyle>,
    image?: FastImageProps['source']
}

export default function CategoryCard({ image, title, style }: CategoryItemProps) {
    return (
        <TouchableOpacity style={styles.categoryContainer}>
            <View style={[styles.categoryIconParentContainer, style]}>
                <View style={[styles.IconContainer]}>
                    <FastImage
                        style={styles.icon}
                        source={image}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
            </View>
            <Txt fontSize={"sm"}>{(title)}</Txt>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        alignItems: 'center',
        marginRight: ms(20, 0.25),
    },
    categoryIconParentContainer: {
        height: ms(50, 0.25),
        width: ms(50, 0.25),
        borderRadius: ms(10, 0.25),
        marginBottom: ms(10, 0.25),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    IconContainer: {
        height: ms(24, 0.25),
        width: ms(24, 0.25),
    },
    icon: {
        height: '100%',
        width: '100%'
    },
})
