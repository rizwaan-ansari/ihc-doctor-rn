import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import ContainerView from '../components/ContainerView';
import Txt from '../components/UIComponent/Txt';
import Btn from '../components/UIComponent/Btn';
import FastImage from 'react-native-fast-image';
import { IMG_CELL_PHONE_ICON, IMG_COUNTRY_ICON, IMG_FACEBOOK_ICON, IMG_GOOGLE_ICON, IMG_IPHONE_ICON, IMG_LOGO, IMG_PASSWORD_LOCK_ICON } from '../assets/images';
import { ms } from 'react-native-size-matters';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

export default function SignUp({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    return(
        <ContainerView staticView hideBackButton hideTitle bodyStyle={{marginHorizontal: 0}}>
            <View style={{flex: 1, padding: ms(16, .25)}}>
                <View className='items-center pt-[98px] pb-[62px]'>
                    <FastImage
                        className='w-[116px] h-[116px]'
                        source={IMG_LOGO}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <View>
                  <View className='w-12 h-12 justify-center items-center absolute z-[9] top-0 left-0 rounded-tl-lg rounded-bl-lg'>
                    <FastImage 
                      className='w-[30%] h-[30%]'
                      source={IMG_COUNTRY_ICON}
                      resizeMode="contain"
                    />
                    </View>
                    <TextInput textContentType="countryName" placeholder='India' placeholderTextColor={"#A5A8AE"} className='bg-[#F5F5F6] w-full h-[48px] text-[#A5A8AE] rounded-lg pl-12' style={[{marginBottom: ms(8)}]}/>
                    <View>
                      <View className='w-12 h-12 justify-center items-center absolute z-[9] top-0 left-0 rounded-tl-lg rounded-bl-lg'>
                        <FastImage
                          className='w-[30%] h-[30%]'
                          source={IMG_CELL_PHONE_ICON}
                          resizeMode="contain"
                        />
                      </View>
                      <TextInput keyboardType="numeric" maxLength={10} placeholder='+91 8040111400' placeholderTextColor={"#A5A8AE"} className='bg-[#F5F5F6] w-full h-[48px] text-[#A5A8AE] rounded-lg pl-12' style={[{marginBottom: ms(8)}]}/>
                    </View>
                    <View>
                      <View className='w-12 h-12 justify-center items-center absolute z-[9] top-0 left-0 rounded-tl-lg rounded-bl-lg'>
                        <FastImage
                          className='w-[30%] h-[30%]'
                          source={IMG_PASSWORD_LOCK_ICON}
                          resizeMode="contain"
                        />
                      </View>
                      <TextInput textContentType="password" secureTextEntry placeholder='Password' placeholderTextColor={"#A5A8AE"} className='bg-[#F5F5F6] w-full h-[48px] text-[#A5A8AE] rounded-lg pl-12' style={[{marginBottom: ms(8, .25),}]}/>
                    </View>
                    {/* <TextInput keyboardType="visible-password" textContentType="password" placeholder='Password' placeholderTextColor={"#A5A8AE"} style={styles.Password}/> */}
                    <TouchableOpacity className='flex-row justify-end'>
                      <Txt className='mb-[22px] justify-end' fontSize={"sm"} fontWeight={500} textAlign={"right"} fontColor={"brand-40"}>Forgot Password?</Txt>
                      <Txt fontColor={"brand"} fontSize={"sm"} fontWeight={500}>{" Get help."}</Txt>
                    </TouchableOpacity>
                    <Btn title='LOGIN' onPress={() => navigation.navigate('OtpScreen')}/>
                    <Txt className='my-6' fontSize={"sm"} fontWeight={500} textAlign={"center"} fontColor={"brand-40"}>Or login with</Txt>
                    <View className='flex-row items-center justify-center'>
                        <TouchableOpacity>
                          <FastImage
                              className='h-[42px] w-[42px] mr-3'
                              source={IMG_IPHONE_ICON}
                              resizeMode={FastImage.resizeMode.contain}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <FastImage
                              className='h-[42px] w-[42px] mr-3'
                              source={IMG_GOOGLE_ICON}
                              resizeMode={FastImage.resizeMode.contain}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <FastImage
                              className='h-[42px] w-[42px] mr-3'
                              source={IMG_FACEBOOK_ICON}
                              resizeMode={FastImage.resizeMode.contain}
                          />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View className="flex-row items-center justify-center mb-2">
              <Txt className='!leading-[14px] flex' fontSize="sm" fontWeight={500} textAlign="center" fontColor="brand-40">
                Already have an account?{' '}
              </Txt>
              <TouchableOpacity onPress={() => navigation.navigate('LogInScreen')}>
                <Txt className='!leading-[14px]' fontSize="sm" fontColor="brand">
                  Sign in
                </Txt>
              </TouchableOpacity>
            </View>
        </ContainerView>
    )
}