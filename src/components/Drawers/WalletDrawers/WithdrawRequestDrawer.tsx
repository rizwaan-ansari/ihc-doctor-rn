import { View, Text } from 'react-native'
import React from 'react'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'
import Txt from '../../UIComponent/Txt'
import { TextInput } from 'react-native-paper'
import { COLOR_PALLETE } from '../../../utils/ColorConstant'
import Btn from '../../UIComponent/Btn'

const handlePress = async () => {
    await SheetManager.hide("withdraw-request-drawer");
    await SheetManager.show("withdraw-request-success-drawer")
}

const WithdrawRequestDrawer = () => {
    return (
        <ActionSheet gestureEnabled={true}>
            <View className='p-[15px]'>
                <Txt fontWeight={700} fontSize={"xl"} fontColor={"primary"}>Withdrawal request</Txt>
                <Txt fontSize={"sm"} fontColor={"neutral-gray"} className='pt-[5px]'>Transfer your wallet money into your bank account</Txt>
                <TextInput
                    mode='outlined'
                    outlineColor='#E2E2E2'
                    className='bg-whisperGray mt-[15px]'
                    activeOutlineColor={COLOR_PALLETE.PRIMARY_TEXT_COLOR}
                    left={<TextInput.Affix text="KD" textStyle={{ color: COLOR_PALLETE.SECONDARY_BRAND_COLOR_1, fontWeight: 700 }} />}
                />
                <View className='mt-[15px]'>
                    <Btn title={"SUBMIT REQUEST"} onPress={handlePress} />
                </View>
            </View>
        </ActionSheet>
    )
}

export default WithdrawRequestDrawer