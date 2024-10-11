import React from 'react'
import { StyleSheet, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { ms } from 'react-native-size-matters'
import RatingStar from './RatingStar'
import Txt from './UIComponent/Txt'
import { COLOR_PALLETE } from '../utils/ColorConstant'


export default function ReviewCard(props:any) {
    return (
        <View style={styles.reviewCard}>
            <View style={styles.reviewProfile}>
                <View style={styles.reviewProfileContainer}>
                    <FastImage
                        style={{width:'100%', height:'100%'}}
                        source={{
                            uri: props.image,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                </View>
            </View>
            <View style={styles.reviewInfoContainer}>
                <View style={styles.reviewHeader}>
                    <View style={styles.reviewNameContainer}>
                        <Txt fontColor={'brand'} fontWeight={700}>{props.name}</Txt>
                        <RatingStar 
                            ratingStarsContainerStyle={{marginTop: ms(3, 0.25)}}
                            rating={props.rating}
                        />
                    </View>
                    <Txt fontSize={'sm'} fontColor={'secondary'}>{props.date}</Txt>
                </View>
                <Txt style={styles.reviewText} fontSize={'sm'}>{props.review}</Txt>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    reviewCard: {
        paddingTop: ms(15, 0.25),
        paddingBottom: ms(10, 0.25),
        marginHorizontal: ms(7.5, 0.25),
        marginBottom: ms(25, 0.25),
        borderBottomWidth: ms(1, 0.25),
        borderBottomColor: COLOR_PALLETE.ACCENT_BORDER_COLOR,
        flexDirection: 'row',
        // width: DEVICE_WIDTH - ms(30, 0.25),
        // maxWidth: ms(390, 0.25),
        minHeight: ms(100, 0.25),
    },
    reviewProfile: {
        paddingRight: ms(5, 0.25),
        height: '100%'
    },
    reviewProfileContainer: {
        height: ms(40, 0.25),
        width: ms(40, 0.25),
        borderWidth: ms(1, 0.25),
        borderColor: COLOR_PALLETE.ACCENT_BORDER_COLOR,
        borderRadius: ms(36, 0.25),
        overflow: 'hidden',
    },
    reviewInfoContainer: {
        paddingHorizontal: ms(5, 0.25),
        flex: 1,
    },
    reviewHeader: {
        justifyContent: 'space-between',
        marginBottom: ms(10, 0.25),
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    reviewNameContainer: {
        marginTop: ms(3, 0.25),
    },
    reviewText: {
        color: COLOR_PALLETE.SECONDARY_TEXT_COLOR,
    },
})
