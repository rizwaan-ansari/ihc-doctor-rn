import { View, Text } from 'react-native'
import React from 'react'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'
import FastImage from 'react-native-fast-image'
import { IMG_WITHDRAWAL_SUCCESSFUL } from '../../../assets/images'
import Txt from '../../UIComponent/Txt'
import Btn from '../../UIComponent/Btn'

const handlpePress = async () => {
    await SheetManager.hide("withdraw-success-drawer")
}

const WithdrawSuccessDrawer = () => {
  return (
    <ActionSheet gestureEnabled={true}>
      <View className='p-[15px] items-center'>
        <View className='w-[135px] h-[100px]'>
            <FastImage 
                source={IMG_WITHDRAWAL_SUCCESSFUL}
                className='w-full h-full object-contain'
            />
        </View>
        <Txt fontSize={"xl"} fontWeight={700} fontColor={"primary"} className='mt-[15px]'>Withdrawal successful</Txt>
        <Txt className='mt-[5px] max-w-[275px]' fontColor={"neutral-gray"} textAlign={"center"}>Withdrawal request has been processed, amount has been transferred in your linked account</Txt>
        <View className='w-full mt-[15px]'>
            <Btn title="OKAY" onPress={handlpePress} />
        </View>
      </View>
    </ActionSheet>
  )
}

export default WithdrawSuccessDrawer