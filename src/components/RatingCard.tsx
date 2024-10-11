import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ms } from 'react-native-size-matters'
import RatingStar from './RatingStar'
import Txt from './UIComponent/Txt'
import { COLOR_PALLETE } from '../utils/ColorConstant'

export default function RatingCard(props: any) {
    return (
        <View style={styles.ratingsCardContainer}>
            <View style={styles.ratingsCard}>
                <View style={styles.ratingsCardLeft}>
                    <Txt style={styles.ratingNumber}>{props.ratingNumber}</Txt>
                </View>
                <View>
                    <RatingStar
                        ratingStarsContainerStyle={{ marginBottom: ms(4, 0.25) }}
                        size={ms(15, 0.25)}
                        rating={props.stars}
                        halfStar={props.halfStar}
                    />
                    <Txt fontColor={'white-80'}>Based on {props.totalRatings} ratings</Txt>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ratingsCardContainer: {
        paddingHorizontal: ms(15, 0.25),
        paddingBottom: ms(15, 0.25),
    },
    ratingsCard: {
        width: '100%',
        height: ms(83, 0.25),
        // maxWidth: ms(350, 0.25),
        backgroundColor: COLOR_PALLETE.BRAND_COLOR,
        borderRadius: ms(10, 0.25),
        // paddingVertical: ms(10, 0.25),
        paddingHorizontal: ms(7.5, 0.25),
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: ms(1, 0.25),
        borderColor: COLOR_PALLETE.ACCENT_BORDER_COLOR

    },
    ratingsCardLeft: {
        flexDirection: 'row',
        paddingHorizontal: ms(7.5, 0.25),
        // backgroundColor: 'red'
    },
    ratingNumber: {
        fontSize: ms(55, 0.25),
        color: COLOR_PALLETE.WHITE_COLOR_90,
    },
})
