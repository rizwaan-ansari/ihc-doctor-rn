import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ms } from 'react-native-size-matters';
import Txt from './Txt';
import FastImage from 'react-native-fast-image';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {COLOR_PALLETE} from '../utils/ColorConstant'
import { useTranslation } from 'react-i18next';

interface PatientCardProps {
    status: Status;
    containerStyles?: Object;
    image: any;
    bookingId: string;
    consultationFee: string;
    timeslot: string;
    date: string;
    onPress: () => void;
    appointmentType: 'Video Call' | 'Walk In';
    dateAndTime: string;
}
export type Status = 'pending' | 'accepted' | 'declined' | 'completed';
const STATUS_INFO: Record<Status, { cardBgColor: string; label: string; statusTextColor: string; cardInfoBgColor: string; profileName: string; dateTextColor: string; appointmentTypeTextColor: string; opacity: number;}> = {
    'pending': {
        cardBgColor: COLOR_PALLETE.BRAND_COLOR,
        opacity: 1,
        label: 'pending',
        statusTextColor: COLOR_PALLETE.WARNING_COLOR,
        cardInfoBgColor: COLOR_PALLETE.ACCENT_BACKGOUND_COLOR,
        profileName: COLOR_PALLETE.WHITE_COLOR,
        dateTextColor: COLOR_PALLETE.WHITE_COLOR_30,
        appointmentTypeTextColor: COLOR_PALLETE.WHITE_COLOR_50
    },
    'accepted': {
        cardBgColor: COLOR_PALLETE.BRAND_COLOR,
        opacity: 1,
        label: 'accepted',
        statusTextColor: COLOR_PALLETE.SUCCESS_COLOR,
        cardInfoBgColor: COLOR_PALLETE.BRAND_LIGHT_COLOR,
        profileName: COLOR_PALLETE.WHITE_COLOR,
        dateTextColor: COLOR_PALLETE.WHITE_COLOR_30,
        appointmentTypeTextColor: COLOR_PALLETE.WHITE_COLOR_50
    },
    'declined': {
        cardBgColor: COLOR_PALLETE.WHITE_COLOR,
        opacity: 0.6,
        label: 'declined',
        statusTextColor: COLOR_PALLETE.DANGER_COLOR,
        cardInfoBgColor: COLOR_PALLETE.ACCENT_BACKGOUND_COLOR,
        profileName: COLOR_PALLETE.PRIMARY_TEXT_COLOR,
        dateTextColor: COLOR_PALLETE.TERTIARY_TEXT_COLOR,
        appointmentTypeTextColor: COLOR_PALLETE.BRAND_COLOR
    },
    'completed': {
        cardBgColor: COLOR_PALLETE.WHITE_COLOR,
        opacity: 0.6,
        label: 'completed',
        statusTextColor: COLOR_PALLETE.SECONDARY_TEXT_COLOR,
        cardInfoBgColor: COLOR_PALLETE.ACCENT_BACKGOUND_COLOR,
        profileName: COLOR_PALLETE.PRIMARY_TEXT_COLOR,
        dateTextColor: COLOR_PALLETE.TERTIARY_TEXT_COLOR,
        appointmentTypeTextColor: COLOR_PALLETE.BRAND_COLOR
    },
};
export default function PatientCard({
    status,
    containerStyles,
    image,
    bookingId,
    consultationFee,
    timeslot,
    date,
    onPress,
    appointmentType,
    dateAndTime
}: PatientCardProps) {
    const { t } = useTranslation(['user_booking', 'common']);
    const BOOKING_INFO = [
        {
            id: 1,
            label: "id",
            output: bookingId,
        },
        {
            id: 2,
            label: "fee",
            output: consultationFee,
        },
        {
            id: 3,
            label: "time",
            output: timeslot,
        },
        {
            id: 4,
            label: "date",
            output: date,
        },
    ];
    return (
        <TouchableOpacity
            className='h-[175px] flex-1 mx-2 rounded-[10px] p-[15px] mb-[15px]'
            style={[{
                backgroundColor: STATUS_INFO[status as Status].cardBgColor, 
                opacity: STATUS_INFO[status as Status].opacity,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: .07,
                shadowRadius: ms(10, 0.25),
                elevation: 5
            }, containerStyles]}
            onPress={onPress}
        >
            <View className='flex-row justify-between items-center'>
                <View className='flex-row items-center'>
                    <View className='h-10 w-10 rounded-[5px] border-[#F1F1F1]'>
                        <FastImage
                            className='w-full h-full'
                            source={image}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>
                    <View className='mx-[10px] max-w-[190px]'>
                        <Txt fontWeight={600} numberOfLines={1} fontColor={'white'} className='mb-[2px]' style={[{color: STATUS_INFO[status as Status].profileName}]}>Christian Hi</Txt>
                        <Txt fontSize={'xs'} fontWeight={600} style={{color: status === 'accepted' ? COLOR_PALLETE.WHITE_COLOR_50 : COLOR_PALLETE.SECONDARY_TEXT_COLOR}}>Cardiology</Txt>
                    </View>
                </View>
                <View className='px-[5px] flex-row'>
                    <Txt fontSize={'xs'} fontWeight={600} textTransform={"capitalize"} style={{color: STATUS_INFO[status as Status].statusTextColor}}>{STATUS_INFO[status as Status].label} </Txt>
                    <EntypoIcon
                        name={status === 'declined' ? 'cross' : 'check'}
                        size={ms(11)}
                        color={STATUS_INFO[status as Status].statusTextColor }
                    />
                </View>
            </View>
            <View className='flex-row items-center py-3 justify-center my-[15px] rounded-lg' style={[{backgroundColor: STATUS_INFO[status as Status].cardInfoBgColor }]}>
                {BOOKING_INFO.map((item, i) =>{
                    const lastIndex = BOOKING_INFO.length -1 === i;
                    return (
                        <View key={"boooking_info"+item.id.toString()} className='px-2 items-center border-r justify-center py-[3px] min-w-[65px] flex-grow' style={[{borderRightColor: lastIndex ? 'transparent' : COLOR_PALLETE.BRAND_COLOR_FADED}]}>
                            <Txt className='mb-[2px]' numberOfLines={1} fontSize={'sm'} fontWeight={700} fontColor={'brand'}>{item.output}</Txt>
                            <Txt fontSize={'xs'} fontWeight={600} numberOfLines={1} style={{color: status === 'accepted' ? COLOR_PALLETE.BRAND_COLOR_40 : COLOR_PALLETE.SECONDARY_TEXT_COLOR}}>{t(item.label)}</Txt>
                        </View>
                    );
                })}
            </View>
            <View className='flex-row justify-between items-center'>
                <TouchableOpacity className='flex-row items-center'>
                    <FontAwesomeIcon
                        name={appointmentType === 'Video Call' ? 'video' : 'clinic-medical'}
                        size={ms(12, 0.25)}
                        color={COLOR_PALLETE.BRAND_LIGHT_COLOR}
                    />
                    <Txt className='mx-[3px]' fontSize={'sm'} fontWeight={600} style={[{color: STATUS_INFO[status as Status].appointmentTypeTextColor}]}> {appointmentType}</Txt>
                </TouchableOpacity>
                <Txt className='text-[11px] mx-[3px]' fontColor={'white-30'} numberOfLines={1} fontWeight={500} style={[{color: STATUS_INFO[status as Status].dateTextColor}]}>{dateAndTime}</Txt>
            </View>
        </TouchableOpacity>
    )
}