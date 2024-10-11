import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ms } from 'react-native-size-matters';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { COLOR_PALLETE } from '../utils/ColorConstant'

export default function RatingStar(props:any) {
    return (
        <View style={[styles.ratingStarsGroup, props.ratingStarsContainerStyle]}>
            {Array(5).fill(0).map((_,i)=> (
                <FontAwesomeIcon 
                    name={props.rating == i+1 && props.halfStar ? 'star-half-empty' : 'star'} 
                    size={ props.size ? props.size : ms(13, 0.25)} 
                    color={props.rating <= i ? '#DDDDDD' : COLOR_PALLETE.BRAND_LIGHT_COLOR} 
                    style={styles.star} 
                /> 
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    ratingStarsGroup: {
        flexDirection: 'row',
        marginLeft: ms(-1.5),
    },
    star: {
        marginHorizontal: ms(3)
    }
})