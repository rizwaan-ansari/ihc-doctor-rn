import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import ContainerView from '../../src/components/ContainerView';
import Txt from '../../src/components/Txt';
import Btn from '../../src/components/Btn';
import FastImage from 'react-native-fast-image';
import { IMG_CELL_PHONE_ICON, IMG_COUNTRY_ICON, IMG_FACEBOOK_ICON, IMG_GOOGLE_ICON, IMG_IPHONE_ICON, IMG_LOGO } from '../../src/assets/images';
import { ms } from 'react-native-size-matters';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

export default function LoginScreen({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    return(
        <ContainerView staticView hideBackButton hideTitle bodyStyle={{marginHorizontal: 0}}>
            <View style={{flex: 1, padding: ms(16, .25)}}>
                <View className='items-center pt-[98px] pb-[62px]'>
                    <FastImage
                        className="w-[116px] h-[116px]"
                        source={IMG_LOGO}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <View>
                    <Txt className="pb-4" fontSize={"sm"} fontWeight={400} textAlign={"center"} fontColor={"brand-40"}>Enter your phone number.  If you are a first time user, you will receive OTP SMS on your phone.</Txt>
                    <View>
                      <View className='w-12 h-12 justify-center items-center absolute z-[9] top-0 left-0 rounded-tl-lg rounded-bl-lg'>
                        <FastImage 
                          className='w-[30%] h-[30%]'
                          source={IMG_COUNTRY_ICON}
                          resizeMode='contain'
                        />
                      </View>
                      <TextInput textContentType="countryName" placeholder='India' placeholderTextColor={"#A5A8AE"} className='bg-[#F5F5F6] w-full h-12 text-[#A5A8AE] rounded-lg pl-12' style={{marginBottom: ms(10)}}/>
                    </View>
                    <View>
                      <View className='w-12 h-12 justify-center items-center absolute z-[9] top-0 left-0 rounded-tl-lg rounded-bl-lg'>
                        <FastImage
                          className='w-[30%] h-[30%]'
                          source={IMG_CELL_PHONE_ICON}
                          resizeMode="contain"
                        />
                      </View>
                      <TextInput keyboardType="numeric" maxLength={10} placeholder='+91 8040111400' placeholderTextColor={"#A5A8AE"} className='bg-[#F5F5F6] w-full h-12 text-[#A5A8AE] rounded-lg pl-12' style={{marginBottom: ms(22, .25)}}/>
                    </View>
                    <Btn title='CONTINUE'/>
                    <Txt className='my-6' fontSize={"sm"} fontWeight={700} textAlign={"center"} fontColor={"brand-40"}>Or login with</Txt>
                    <View className='flex-row items-center justify-center'>
                      <TouchableOpacity>
                        <View className='h-[42px] w-[42px] mr-3'>
                          <FastImage
                              className='w-full h-full'
                              source={IMG_IPHONE_ICON}
                              resizeMode={FastImage.resizeMode.contain}
                          />
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <View className='h-[42px] w-[42px] mr-3'>
                          <FastImage
                              className='w-full h-full'
                              source={IMG_GOOGLE_ICON}
                              resizeMode={FastImage.resizeMode.contain}
                          />
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <View className='h-[42px] w-[42px] mr-3'>
                          <FastImage
                              className='w-full h-full'
                              source={IMG_FACEBOOK_ICON}
                              resizeMode={FastImage.resizeMode.contain}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View className="flex-row items-center justify-center mb-2">
                <Txt className='!leading-[14px] flex' fontSize="sm" fontWeight={500} textAlign="center" fontColor="brand-40">
                  Don't have an account?{' '}
                </Txt>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                  <Txt className='!leading-[14px]' fontSize="sm" fontColor="brand">
                    Sign Up
                  </Txt>
                </TouchableOpacity>
            </View>
        </ContainerView>
    )
}