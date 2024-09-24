import * as React from 'react';
import { Dimensions, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel from "react-native-reanimated-carousel";
import { ms } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';
import {
  IMG_APPOINTMENT_MENU_ICON,
  IMG_AVAILABILITY_MENU_ICON,
  IMG_LANGUAGE_MENU_ICON,
  IMG_MY_PROFILE_MENU_ICON,
  IMG_NOTIFICATIONS_MENU_ICON,
  IMG_PATIENTS_MENU_ICON,
  IMG_REVIEWS_MENU_ICON,
  IMG_TIME_BLOCK_MENU_ICON,
  IMG_USER_PROFILE_4,
  IMG_WALLET_MENU_ICON
} from '../assets/images';
import ContainerView from '../components/ContainerView';
import PatientCard, { Status } from '../components/PatientCard';
import { Section } from '../components/Section';
import Txt from '../components/Txt';
import footerLinks from '../data/footerLinks';

const { width: deviceWidth } = Dimensions.get('window');

const DATA = [
    {
        id: 0,
        key: 'appointments',
        title: 'Appointments',
        image: IMG_APPOINTMENT_MENU_ICON,
        link: 'BookingListScreen',
        hasNotification: true,
    },
    {
        id: 1,
        key: 'patients',
        title: 'Patients',
        link: 'PatientListScreen',
        image: IMG_PATIENTS_MENU_ICON,
        hasNotification: false,
    },
    {
        id: 2,
        key: 'notifications',
        title: 'Notifications',
        link: 'NotificationScreen',
        image: IMG_NOTIFICATIONS_MENU_ICON,
        hasNotification: true,
    },
    {
        id: 3,
        key: 'availability',
        title: 'Availability',
        link: 'BookingListScreen',
        image: IMG_AVAILABILITY_MENU_ICON,
        hasNotification: false,
    },
    {
        id: 4,
        key: 'time_block',
        title: 'Time Block',
        link: 'BookingListScreen',
        image: IMG_TIME_BLOCK_MENU_ICON,
        hasNotification: false,
    },
    {
        id: 5,
        key: 'wallet',
        title: 'Wallet',
        link: 'DoctorWalletScreen',
        image: IMG_WALLET_MENU_ICON,
        hasNotification: true,
    },
    {
        id: 6,
        key: 'reviews',
        title: 'Reviews',
        link: 'ReviewScreen',
        image: IMG_REVIEWS_MENU_ICON,
        hasNotification: true,
    },
    {
        id: 7,
        key: 'language',
        title: 'Language',
        link: 'ChangeLanguageScreen',
        image: IMG_LANGUAGE_MENU_ICON,
        hasNotification: false,
    },
    {
        id: 8,
        key: 'my_profile',
        title: 'My Profile',
        link: 'DoctorEditProfileScreen',
        image: IMG_MY_PROFILE_MENU_ICON,
        hasNotification: false,
    }
]
const BOOKING_CARD = [
    {
        id: 1,
        profile_pic: IMG_USER_PROFILE_4 ,
        patient_name: 'Christian Hickman',
        status: 'accepted',
        booking_id: '# 1281',
        consultation_fee: '30.00 KD',
        timeslot: '12:30pm',
        date: '15-08-21',
        appointment_type: 'Video Call',
        date_and_time: '5:30 PM - 6:00 PM, 15 Aug 2021',
    },
    {
        id: 2,
        profile_pic: IMG_USER_PROFILE_4,
        patient_name: 'Christian Hickman',
        status: 'completed',
        booking_id: '# 281',
        consultation_fee: '30 KD',
        timeslot: '5:30pm',
        date: '15-08-21',
        appointment_type: 'Video Call',
        date_and_time: '5:30 PM - 6:00 PM, 15 Aug 2021',
    },
    {
        id: 3,
        profile_pic: IMG_USER_PROFILE_4,
        patient_name: 'Christian Hickman',
        status: 'declined',
        booking_id: '# 281',
        consultation_fee: '30 KD',
        timeslot: '5:30pm',
        date: '15-08-21',
        appointment_type: 'Walk In',
        date_and_time: '5:30 PM - 6:00 PM, 15 Aug 2021',
    },
    {
        id: 4,
        profile_pic: IMG_USER_PROFILE_4,
        patient_name: 'Christian Hickman',
        status: 'pending',
        booking_id: '# 1281',
        consultation_fee: '30.00 KD',
        timeslot: '12:30pm',
        date: '15-08-21',
        appointment_type: 'Video call',
        date_and_time: '5:30 PM - 6:00 PM, 15 Aug 2021',
    },
];

export default function AccountScreen(props: any) {
  const windowWidth = useWindowDimensions().width;
  const viewCount = 2;
  return (
    <ContainerView>
      <View>
        <Section title="Recent Appoinments" btnText="View All" style={{padding: 0}} unsetInnerSpacing={true}>
          <View className='w-full relative -left-2 overflow-hidden pt-[14px] pl-4'>
          <Carousel
            width={windowWidth - 60}
            height={200}
            style={{width: "100%", paddingTop: 20, overflow: "visible"}}
            mode={"horizontal-stack"}
            data={BOOKING_CARD}
            customConfig={() => ({ type: "negative", viewCount: 2 })}

            modeConfig={{
                snapDirection: "left",
                stackInterval: 24,
                showLength: 3,
                opacityInterval: 0.02,
                scaleInterval: 0.09,
                rotateZDeg: 20
              }}
              renderItem={({ item, index }) => (
                <PatientCard 
                    status={item.status as Status}
                    image={item.profile_pic}
                    bookingId={item.booking_id}
                    consultationFee={item.consultation_fee}
                    timeslot={item.timeslot}
                    date={item.date}
                    onPress={() => {}}
                    appointmentType={item.appointment_type as 'Video Call' | 'Walk In'}
                    dateAndTime={item.date_and_time}
                />
              )}
              />
          </View>
        </Section>
        <Section title="Main Menu">
          <View>
            <FlatGrid
              style={{
                marginHorizontal: ms(-16, 0.25),
                marginVertical: ms(-16, 0.25),
              }}
              itemDimension={ms(130, 0.25)}
              spacing={ms(16, 0.25)}
              data={DATA}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => props.navigation.navigate(item.link)}>
                  <View className='bg-[#F6F6F6] w-full rounded-lg pl-4 py-6 relative'>
                    <FastImage source={item.image} className='w-4 h-4 mb-2'/>
                    <Txt fontSize={"sm"} fontWeight={500}>
                      {item.title}
                    </Txt>

                    {item.hasNotification && (
                      <View className='absolute right-2 top-2 w-2 h-2 rounded-full bg-[#A20021]'></View>
                    )}
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </Section>
        <Section title="More">
          <View>
          {footerLinks.map((item, index) => (
            <TouchableOpacity>
              <View key={index} className='flex-row items-center mb-6'>
                <View className='w-[18px] h-[18px] mr-3'>
                  <FastImage
                    className='w-full h-full'
                    source={item.image}
                    resizeMode="contain"
                  />
                </View>
                <Txt fontSize={"base"} fontWeight={500}>
                  {item.label}
                </Txt>
              </View>
            </TouchableOpacity>
          ))}
          </View>
        </Section>
      </View>
    </ContainerView>
  );
}
