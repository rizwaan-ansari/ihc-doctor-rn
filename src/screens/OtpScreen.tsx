import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ContainerView from '../components/ContainerView'
import FeatherIcon from 'react-native-vector-icons/Feather';
import { ms } from 'react-native-size-matters';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { IMG_OTP_SCREEN } from '../assets/images';
import Txt from '../components/Txt';
import OTPTextView from 'react-native-otp-textinput';

const OtpScreen = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  return (
    <ContainerView bodyStyle={{marginHorizontal: 0}} staticView staticViewStyle={{backgroundColor: "white"}}>
        {/* <TouchableOpacity className='w-[35px] h-[35px] rounded-lg bg-[rgba(99,199,236,.3)] justify-center items-center absolute left-0 top-0' onPress={()=> navigation.goBack()}>
            <Text>
                <FeatherIcon name="chevron-left" size={ms(24, .25)}/>
            </Text>
        </TouchableOpacity> */}
        <View className='justify-center items-center'>
            <View className='w-[118px] h-[118px] mt-12'>
                <FastImage 
                    source={IMG_OTP_SCREEN}
                    className='w-full h-full'
                    resizeMode='contain'
                />
            </View>
            <Txt  textAlign={'center'} className='max-w-[286px] mt-[60px]' fontSize={'sm'} fontWeight={400} fontColor={'brand-60'}>Enter your phone number.  If you are a first 
            time user, you will receive OTP SMS on your phone.</Txt>
            <OTPTextView tintColor="#F5F5F6" offTintColor="#F5F5F6"  inputCount={6} textInputStyle={{backgroundColor: "#F5F5F6", width: 48, height: 48, borderRadius: 8, marginTop: 16}}></OTPTextView>
            <Txt fontSize={'sm'} textAlign={'center'} fontColor={'brand-60'} fontWeight={400} className='mt-[26px]'>Resend OTP in 1:29s</Txt>
        </View>
    </ContainerView>
  )
}

export default OtpScreen