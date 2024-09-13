import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ContainerView from '../components/ContainerView';
import Txt from '../components/Txt';
import {Section} from '../components/Section';
import {ms} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import { Dimensions } from 'react-native';
import { useWindowDimensions } from 'react-native';
import {
  IMG_ABOUT_ICON_MORE,
  IMG_APPOINTMENT_MENU_ICON,
  IMG_AVAILABILITY_MENU_ICON,
  IMG_CONTACT_US_ICON_MORE,
  IMG_FAQ_ICON_MORE,
  IMG_LANGUAGE_MENU_ICON,
  IMG_LOGIN_ICON_MORE,
  IMG_MY_PROFILE_MENU_ICON,
  IMG_NOTIFICATIONS_MENU_ICON,
  IMG_PATIENTS_MENU_ICON,
  IMG_PATIENT_PROFILE_ICON,
  IMG_PRIVACY_POLICY_ICON_MORE,
  IMG_REGISTER_ICON_MORE,
  IMG_REVIEWS_MENU_ICON,
  IMG_SECURITY_ICON_MORE,
  IMG_TERMS_CONDITIONS_ICON_MORE,
  IMG_TIME_BLOCK_MENU_ICON,
  IMG_VIDEO_CALL_ICON,
  IMG_WALLET_MENU_ICON,
  IMG_USER_PROFILE_4 
} from '../assets/images';
import {FlatGrid} from 'react-native-super-grid';
// import {Navigation} from 'react-native-navigation';
import Carousel from "react-native-reanimated-carousel";
import Animated, { FadeInRight } from 'react-native-reanimated'
import PatientCard, { Status } from '../components/PatientCard';

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
          {/* <View style={styles.PatientCard}>
                        <View style={styles.PatientProfile}>
                            <View style={styles.PatientProfileIconContainer}>
                                <FastImage 
                                source={IMG_PATIENT_PROFILE_ICON}
                                style={styles.PatientProfileIcon}
                                resizeMode='contain'
                                />
                            </View>
                            <View>
                                <Txt size="regular" weight="medium" color="white" >Ammar Yousufzai</Txt>
                                <Txt size="xs" weight="semiBold" color="success" >Accept</Txt>
                            </View>
                        </View>
                        <View style={styles.AppointmentDetailsContainer}>
                            <View style={styles.AppointmentDetails}>
                                <Txt size="small" weight="bold" color="brand" align='center'># 281</Txt>
                                <Txt style={styles.AppointmentDetailsTitle} size="xs" weight="medium" align="center">ID</Txt>
                            </View>
                            <View style={styles.AppointmentDetails}>
                                <Txt size="small" weight="bold" color="brand" align='center'>30 KD</Txt>
                                <Txt style={styles.AppointmentDetailsTitle} size="xs" weight="medium" align="center">Fee</Txt>
                            </View>
                            <View style={styles.AppointmentDetails}>
                                <Txt size="small" weight="bold" color="brand" align='center'>5:30pm</Txt>
                                <Txt style={styles.AppointmentDetailsTitle} size="xs" weight="medium" align="center">Time</Txt>
                            </View>
                            <View style={styles.AppointmentDetails}>
                                <Txt size="small" weight="bold" color="brand" align='center'>15-08-21</Txt>
                                <Txt style={styles.AppointmentDetailsTitle} size="xs" weight="medium" align="center">Date</Txt>
                            </View>
                        </View>
                        <View style={styles.VideoCallAppoitment}>
                            <TouchableOpacity>
                                <View style={styles.VideoCallContainer}>
                                    <View style={styles.VideoCallIconContainer}>
                                        <FastImage 
                                        style={styles.VideoCallIcon}
                                        source={IMG_VIDEO_CALL_ICON}
                                        resizeMode='contain'
                                        />
                                    </View>
                                    <Txt color="white-30" size="xs" weight="medium">Video call</Txt>
                                </View>
                            </TouchableOpacity>
                            <Txt color="white-30" size="xs" weight="medium">5:30 PM , 15 Aug 2021</Txt>
                        </View>
                    </View> */}
          <View style={styles.CarouselContainer}>
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
                  <View style={styles.MenuCard}>
                    <FastImage source={item.image} style={styles.MenuIcons} />
                    <Txt fontSize={"sm"} fontWeight={500}>
                      {item.title}
                    </Txt>

                    {item.hasNotification && (
                      <View style={styles.HasNotification}></View>
                    )}
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </Section>
        <Section title="More">
          <View>
            <TouchableOpacity>
              <View style={styles.FooterContainer}>
                <View style={styles.FooterIconsContainer}>
                  <FastImage
                    style={styles.FooterIcons}
                    source={IMG_ABOUT_ICON_MORE}
                    resizeMode="contain"
                  />
                </View>
                <Txt fontSize={"base"} fontWeight={500}>
                  About
                </Txt>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.FooterContainer}>
                <View style={styles.FooterIconsContainer}>
                  <FastImage
                    style={styles.FooterIcons}
                    source={IMG_PRIVACY_POLICY_ICON_MORE}
                    resizeMode="contain"
                  />
                </View>
                <Txt fontSize={"base"} fontWeight={500}>
                  Privacy Policy
                </Txt>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.FooterContainer}>
                <View style={styles.FooterIconsContainer}>
                  <FastImage
                    style={styles.FooterIcons}
                    source={IMG_TERMS_CONDITIONS_ICON_MORE}
                    resizeMode="contain"
                  />
                </View>
                <Txt fontSize={"base"} fontWeight={500}>
                  Terms of services
                </Txt>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.FooterContainer}>
                <View style={styles.FooterIconsContainer}>
                  <FastImage
                    style={styles.FooterIcons}
                    source={IMG_SECURITY_ICON_MORE}
                    resizeMode="contain"
                  />
                </View>
                <Txt fontSize={"base"} fontWeight={500}>
                  Security
                </Txt>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.FooterContainer}>
                <View style={styles.FooterIconsContainer}>
                  <FastImage
                    style={styles.FooterIcons}
                    source={IMG_CONTACT_US_ICON_MORE}
                    resizeMode="contain"
                  />
                </View>
                <Txt fontSize={"base"} fontWeight={500}>
                  Contact us
                </Txt>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.FooterContainer}>
                <View style={styles.FooterIconsContainer}>
                  <FastImage
                    style={styles.FooterIcons}
                    source={IMG_FAQ_ICON_MORE}
                    resizeMode="contain"
                  />
                </View>
                <Txt fontSize={"base"} fontWeight={500}>
                  FAQ
                </Txt>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.FooterContainer}>
                <View style={styles.FooterIconsContainer}>
                  <FastImage
                    style={styles.FooterIcons}
                    source={IMG_LOGIN_ICON_MORE}
                    resizeMode="contain"
                  />
                </View>
                <Txt fontSize={"base"} fontWeight={500}>
                  Login
                </Txt>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.FooterContainer}>
                <View style={styles.FooterIconsContainer}>
                  <FastImage
                    style={styles.FooterIcons}
                    source={IMG_REGISTER_ICON_MORE}
                    resizeMode="contain"
                  />
                </View>
                <Txt fontSize={"base"} fontWeight={500}>
                  Register
                </Txt>
              </View>
            </TouchableOpacity>
          </View>
        </Section>
      </View>
    </ContainerView>
  );
}
const styles = StyleSheet.create({
  // PatientCard: {
  //   backgroundColor: '#202C50',
  //   borderRadius: ms(8, 0.25),
  //   padding: ms(16, 0.25),
  // },
  PatientProfile: {
    flexDirection: 'row',
    paddingBottom: ms(16, 0.25),
  },
  PatientProfileIconContainer: {
    width: ms(40, 0.25),
    height: ms(40, 0.25),
    marginRight: ms(8, 0.25),
  },
  PatientProfileIcon: {
    width: '100%',
    height: '100%',
    borderRadius: ms(50, 0.25),
  },
  CarouselContainer: {
    width: "100%",
    position: "relative",
    left: -8,
    overflow: "hidden",
    paddingTop: 14,
    paddingLeft: 15
  },
  AppointmentDetailsContainer: {
    backgroundColor: '#63C7EC',
    flexDirection: 'row',
    paddingVertical: ms(16, 0.25),
    // paddingLeft: ms(16, .25),
    // justifyContent: "space-between",
    borderRadius: ms(8, 0.25),
  },
  AppointmentDetails: {
    paddingRight: ms(8, 0.25),
    borderRightColor: '#202C501A',
    borderRightWidth: ms(1, 0.25),
    flex: 1,
  },
  AppointmentDetailsTitle: {
    color: '#202C5066',
  },
  VideoCallAppoitment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: ms(16, 0.25),
  },
  VideoCallContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  VideoCallIconContainer: {
    width: ms(10, 0.25),
    height: ms(10, 0.25),
    marginRight: ms(4, 0.25),
  },
  VideoCallIcon: {
    width: '100%',
    height: '100%',
  },
  MenuCard: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    borderRadius: ms(8, 0.25),
    paddingLeft: ms(16, 0.25),
    paddingVertical: ms(24, 0.25),
    position: 'relative',
  },
  MenuIcons: {
    width: ms(16, 0.25),
    height: ms(16, 0.25),
    marginBottom: ms(8, 0.25),
  },
  HasNotification: {
    position: 'absolute',
    right: ms(8, 0.25),
    top: ms(8, 0.25),
    width: ms(8, 0.25),
    height: ms(8, 0.25),
    borderRadius: ms(50, 0.25),
    backgroundColor: '#A20021',
  },
  FooterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: ms(24, 0.25),
  },
  FooterIconsContainer: {
    width: ms(18, 0.25),
    height: ms(18, 0.25),
    marginRight: ms(12, 0.25),
  },
  FooterIcons: {
    width: '100%',
    height: '100%',
  },
});
