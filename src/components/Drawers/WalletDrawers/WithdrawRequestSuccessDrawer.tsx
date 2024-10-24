import { View, Text } from 'react-native'
import React from 'react'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'
import FastImage from 'react-native-fast-image'
import { IMG_REQUEST_SUCCESSFUL } from '../../../assets/images'
import Txt from '../../UIComponent/Txt'
import Btn from '../../UIComponent/Btn'

const handlePress = async () => {
    await SheetManager.hide("withdraw-request-success-drawer")
    await SheetManager.show("withdraw-success-drawer")
}

const WithdrawRequestSuccessDrawer = () => {
    return (
        <ActionSheet gestureEnabled={true}>
            <View className='p-[15px] items-center'>
                <View className='w-[135px] h-[100px] pt-[5px]'>
                    <FastImage 
                        source={IMG_REQUEST_SUCCESSFUL}
                        className='w-full h-full object-contain'
                    />
                </View>
                <Txt fontSize={"xl"} fontWeight={700} className='mt-[15px]' fontColor={"primary"}>Request successful</Txt>
                <Txt textAlign={'center'} fontSize={"sm"} className='max-w-[275px] mt-[5px]' fontColor={"neutral-gray"}>Withdrawal request has been placed, you will recieve the amount in your account once processed</Txt>
                <View className='mt-[15px] w-full'>
                    <Btn title='OKAY' onPress={handlePress}/>
                </View>
            </View>
        </ActionSheet>
    )
}

export default WithdrawRequestSuccessDrawer