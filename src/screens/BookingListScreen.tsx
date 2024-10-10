import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import ContainerView from '../components/ContainerView'
import { Section } from '../components/Section'
import FastImage from 'react-native-fast-image'
import Txt from '../components/Txt'
import { IMG_FILTER_ICON, IMG_FILTER_LIST_ICON, IMG_FILTER_MENU_ICON, IMG_FILTER_VIDEO_CALL_ICON, IMG_PATIENT_2_PROFILE_ICON, IMG_PATIENT_3_PROFILE_ICON, IMG_PATIENT_4_PROFILE_ICON, IMG_PATIENT_PROFILE_ICON, IMG_VIDEO_CALL_ICON } from '../assets/images'
import { ms } from 'react-native-size-matters'
import BOOKING_CARD from '../data/bookindCard'
import PatientCard, { Status } from '../components/PatientCard'

const PATIENT = [
    {
        id: 0,
        key: 'patients',
        title: 'Amr Murtuza bin Saleh',
        image: IMG_PATIENT_PROFILE_ICON,
        hasNotification:true
        
    },
    {
        id: 1,
        key: 'patients',
        title: 'Alia Rahman',
        image: IMG_PATIENT_2_PROFILE_ICON,
        hasNotification:true
    },
    {
        id: 2,
        key: 'patients',
        title: 'Amr Murtuza bin Saleh',
        image: IMG_PATIENT_3_PROFILE_ICON,
        hasNotification:false
    },
    {
        id: 3,
        key: 'patients',
        title: 'Amr Murtuza bin Saleh',
        image: IMG_PATIENT_4_PROFILE_ICON,
        hasNotification:false
    },
    {
        id: 4,
        key: 'patients',
        title: 'Amr Murtuza bin Saleh',
        image: IMG_PATIENT_PROFILE_ICON,
        hasNotification:false
    },
    {
        id: 5,
        key: 'patients',
        title: 'Alia Rahman',
        image: IMG_PATIENT_2_PROFILE_ICON,
        hasNotification:false
    },
    {
        id: 6,
        key: 'patients',
        title: 'Amr Murtuza bin Saleh',
        image: IMG_PATIENT_3_PROFILE_ICON,
        hasNotification:true
    },
    {
        id: 7,
        key: 'patients',
        title: 'Amr Murtuza bin Saleh',
        image: IMG_PATIENT_4_PROFILE_ICON,
        hasNotification:false
    }
]

const BookingListScreen = () => {
    return (
        <ContainerView>
            <View>
                <Section>
                    <View style={styles.PatientStatusContainer}>
                        <FlatList
                            data={PATIENT}
                            keyExtractor={(_: any, index: number) => 'patient-list-item' + index}
                            horizontal
                            renderItem={({ item }) => (
                                <TouchableOpacity>
                                    <View>
                                        <View style={styles.PatientProfileStatusContainer}>
                                            <FastImage
                                                style={styles.PatientProfileStatus}
                                                source={item.image}
                                                resizeMode='contain'
                                            />
                                        </View>
                                        <View style={{ width: ms(62, .25) }}>
                                            <Txt numberOfLines={1} fontColor={"tertiary"} fontSize={"base"} textAlign={"center"} fontWeight={600}>{item.title}</Txt>
                                        </View>
                                        {item.hasNotification &&
                                            <View style={styles.HasNotification}></View>
                                        }
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </Section>
                <Section>
                    <View style={styles.FilterWrapper}>
                        <View style={styles.FilterContainer}>
                            <TouchableOpacity>
                                <View style={[styles.FilterIconContainer, styles.FilterIconContainerActive]}>
                                    <FastImage
                                        style={styles.FilterIcon}
                                        source={IMG_FILTER_LIST_ICON}
                                        resizeMode="contain"
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.FilterIconContainer}>
                                    <FastImage
                                        style={styles.FilterIcon}
                                        source={IMG_FILTER_MENU_ICON}
                                        resizeMode="contain"
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.FilterIconContainer}>
                                    <FastImage
                                        style={styles.FilterIcon}
                                        source={IMG_FILTER_VIDEO_CALL_ICON}
                                        resizeMode="contain"
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.FilterContainer}>
                            <TouchableOpacity>
                                <View style={styles.FilterIconWrapper}>
                                    <View style={styles.FilterIconContainer}>
                                        <FastImage
                                            style={styles.FilterIcon}
                                            source={IMG_FILTER_ICON}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <Txt fontColor={"brand"} fontSize={"sm"} fontWeight={500}>Filter</Txt>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        data={BOOKING_CARD}
                        renderItem={({item}) => (
                            <PatientCard 
                            status={item.status as Status}
                            containerStyles={""}
                            image={item.profile_pic}
                            bookingId={item.booking_id}
                            consultationFee={item.consultation_fee}
                            timeslot={item.timeslot}
                            date={item.date}
                            onPress={() => {}}
                            appointmentType={item.appointment_type as "Video Call" | "Walk In"}
                            dateAndTime={item.date_and_time}
                            />
                         )}
                    />
                </Section>
            </View>
        </ContainerView>
    )
}

const styles = StyleSheet.create({
    PatientCard: {
        backgroundColor: "#F5F5F5",
        borderRadius: ms(8, .25),
        padding: ms(16, .25),
        marginBottom: ms(16, .25),
        opacity: ms(0.6, .25)
    },
    ActivePatientCard: {
        backgroundColor: "#202C50",
        opacity: ms(1, .25)
    },
    PatientProfile: {
        flexDirection: "row",
        paddingBottom: ms(16, .25),
        flex: 1,
    },
    PatientProfileIconContainer: {
        width: ms(40, .25),
        height: ms(40, .25),
        marginRight: ms(8, .25),
    },
    PatientProfileIcon: {
        width: "100%",
        height: "100%",
        borderRadius: ms(8, .25)
    },
    AppointmentDetailsContainer: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        paddingVertical: ms(16, .25),
        // paddingLeft: ms(16, .25),
        // justifyContent: "space-between",
        borderRadius: ms(8, .25),
    },
    ActiveAppointmentDetailsContainer: {
        backgroundColor: "#63C7EC",
    },
    AppointmentDetails: {
        paddingRight: ms(8, .25),
        borderRightColor: "#202C501A",
        borderRightWidth: ms(1, .25),
        flex: 1
    },
    AppointmentDetailsTitle: {
        color: "#202C5066"
    },
    VideoCallAppoitment: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: ms(16, .25)
    },
    VideoCallContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    VideoCallIconContainer: {
        width: ms(10, .25),
        height: ms(10, .25),
        marginRight: ms(4, .25)
    },
    VideoCallIcon: {
        width: "100%",
        height: "100%"
    },
    PatientStatusContainer: {
        flexDirection: "row",
        overflow: "hidden"
    },
    PatientProfileStatusContainer: {
        width: ms(62, .25),
        height: ms(62, .25),
        borderRadius: ms(50, .25),
        marginRight: ms(16, .25),
        // position: "relative"
    },
    PatientProfileStatus: {
        width: "100%",
        height: "100%",
        borderRadius: ms(50, .25),
    },
    PatientProfileDetailsWrapper: {
        flexDirection: "row",
        flex: 1
    },
    PatientProfileDetails: {
        // justifyContent: "space-between",
        // alignItems: "baseline",
        flex: 1,
    },
    HasNotification: {
        position: "absolute",
        right: ms(16, .25),
        top: ms(4, .25),
        width: ms(8, .25),
        height: ms(8, .25),
        borderRadius: ms(50, .25),
        backgroundColor: "#63C7EC",
        borderColor: "#202C50",
        borderWidth: ms(2, .25)
    },
    FilterWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    FilterContainer: {
        flexDirection: "row",
        marginBottom: ms(16, .25),
        backgroundColor: "#F6F6F6",
        borderRadius: ms(8, .25),
        padding: ms(2, .25)
    },
    FilterIconContainer: {
        width: ms(30, .25),
        height: ms(30, .25),
        alignItems: "center",
        justifyContent: "center",
    },
    FilterIconContainerActive: {
        backgroundColor: "#63C7EC",
        borderRadius: ms(8, .25)
    },
    FilterIcon: {
        width: ms(14, .25),
        height: ms(14, .25),
    },
    FilterIconWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: ms(8, .25)
    }
});

export default BookingListScreen