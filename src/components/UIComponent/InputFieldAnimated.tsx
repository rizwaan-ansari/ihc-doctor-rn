import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import { ms } from 'react-native-size-matters';
import { COLOR_PALLETE } from '../../utils/ColorConstant';

export default function InputFieldAnimated(props:any) {
    const [text, setText] = React.useState('');
    return (
        <View>
            <TextInput
                type="outlined"
                selectionColor={COLOR_PALLETE.PRIMARY_TEXT_COLOR}
                style={{height: ms(50, 0.25)}}
                theme={{ colors: { placeholder: COLOR_PALLETE.TERTIARY_TEXT_COLOR } }}
                outlineColor={COLOR_PALLETE.ACCENT_BORDER_COLOR}
                activeOutlineColor={COLOR_PALLETE.MUTED_GRAY}
                label={props.label ? props.label : 'Label'}
                onChangeText={props.onChangeText}
                mode='outlined'
                value={props.value}
                numberOfLines={props.value}
                keyboardType={props.value}
                className='bg-white'
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
