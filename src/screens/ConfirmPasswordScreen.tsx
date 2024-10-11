import { StyleSheet, TextInput, View } from 'react-native';
import ContainerView from '../components/ContainerView';
import Txt from '../components/UIComponent/Txt';
import Btn from '../components/UIComponent/Btn';
import FastImage from 'react-native-fast-image';
import { IMG_CONFIRM_PASSWORD_BANNER, IMG_PASSWORD_LOCK_ICON} from '../assets/images';
import { ms } from 'react-native-size-matters';

export default function ConfirmPassword() {
    return(
        <ContainerView staticView hideBackButton hideTitle bodyStyle={{marginHorizontal: 0}} staticViewStyle={{backgroundColor: "white"}}>
            <View style={{flex: 1, padding: ms(16, .25)}}>
                <View className='items-center pt-[98px] pb-[62px]'>
                    <FastImage
                        className='w-[116px] h-[116px]'
                        source={IMG_CONFIRM_PASSWORD_BANNER}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <View>
                    <Txt className='mb-4' fontSize={"sm"} fontWeight={400} textAlign={"center"} fontColor={"brand-40"}>Please enter a password for your account</Txt>
                    <View>
                        <View className='w-12 h-12 justify-center items-center absolute z-[9] top-0 left-0 rounded-tl-lg rounded-bl-lg'>
                        <FastImage
                            className='w-[30%] h-[30%]'
                            source={IMG_PASSWORD_LOCK_ICON}
                            resizeMode="contain"
                        />
                        </View>
                        <TextInput textContentType="password" placeholder='Password' secureTextEntry placeholderTextColor={"#A5A8AE"} className='bg-[#F5F5F6] w-full h-12 text-[#A5A8AE] rounded-lg pl-12' style={[{marginBottom: ms(8, .25),}]}/>
                    </View>
                      <View>
                        <View className='w-12 h-12 justify-center items-center absolute z-[9] top-0 left-0 rounded-tl-lg rounded-bl-lg'>
                        <FastImage
                            className='w-[30%] h-[30%]'
                            source={IMG_PASSWORD_LOCK_ICON}
                            resizeMode="contain"
                        />
                        </View>
                        <TextInput textContentType="password" placeholder='Confirm Password' secureTextEntry placeholderTextColor={"#A5A8AE"} className='bg-[#F5F5F6] w-full h-12 text-[#A5A8AE] rounded-lg pl-12' style={[{marginBottom: ms(8, .25),}]}/>
                    </View>
                </View>
            </View>
            {/* <Txt classname='pb-2' size="regular" weight="medium" align="center" color="brand-40">Dont have an account? <Txt color="brand">Sign up</Txt></Txt> */}
        </ContainerView>
    )
}