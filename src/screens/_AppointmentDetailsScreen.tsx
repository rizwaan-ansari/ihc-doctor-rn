import React, { useReducer } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Txt from '../components/UIComponent/Txt';
import ContainerView from '../components/ContainerView';
import { Section } from '../components/Section';
import { ms } from 'react-native-size-matters';
import { SquircleView } from 'react-native-figma-squircle';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Animated from 'react-native-reanimated';
import { COLOR_PALLETE } from '../utils/ColorConstant'
import FastImage from 'react-native-fast-image';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { IMG_CALENDAR_ICON, IMG_CLOCK_ICON_CIRCLE, IMG_TIMESLOT_ICON_CIRCLE, IMG_VIDEO_ICON, IMG_VIDEO_ICON_CIRCLE } from '../assets/images';
import { AnimatePresence, View as MotiView } from 'moti';
import { NavigationProp, ParamListBase } from '@react-navigation/native';


const BACK_BUTTON_SIZE = ms(35, .25)

const APPOINTMENT_DETAIL = [
    {
        id: 1,
        label: "appointment_type",
        output: 'Video Consultation',
        icon: 'video',
    },
    {
        id: 2,
        label: "phone_number",
        output: '9834567890',
        icon: 'phone',
        countryCode: '+91'
    },
    {
        id: 3,
        label: "date",
        output: '15th April',
        icon: 'calendar',
    },
    {
        id: 4,
        label: "time_slot",
        output: '1:00 am',
        icon: 'pie-chart',
    },
    {
        id: 5,
        label: "duration_in_minutes",
        output: '30m',
        icon: 'clock',
    },
];
const PATIENTS = [
    {
        id: 1,
        patient: 'JD',
        name: 'Jane Doe',
        age: '32',
        gender: 'Female',
        blood_group: 'O +ve'
    },
    {
        id: 2,
        patient: 'MA',
        name: 'Johnathan Ive',
        age: '18',
        gender: 'Male',
        blood_group: 'O +ve'
    },
    {
        id: 3,
        patient: 'MD',
        name: 'Nathan Morgan ASD',
        age: '20',
        gender: 'Male',
        blood_group: 'O +ve'
    },
];


export default function AppointmentDetailScreen({ navigation }: { navigation: NavigationProp<ParamListBase> }) {
    const [state, setState] = useReducer((state: any, newState: any) => ({ ...state, ...newState }), {
        appointmentDetail: APPOINTMENT_DETAIL,
        patients: PATIENTS,
        selectedPatientId: 1,
        text: null,
    });

    const renderSelectPatientMenuItem = ({ item, index }: { item: any, index: number }) => {
        const initials = item.name.split(' ').slice(0, 2).map((word: string) => word.charAt(0)).join('');


        return (
            <TouchableOpacity
                onPress={() => setState({ selectedPatientId: item.id })}
                style={[styles.selectPatient, { backgroundColor: item.id === state.selectedPatientId ? COLOR_PALLETE.BRAND_LIGHT_COLOR : COLOR_PALLETE.ACCENT_BORDER_COLOR }]}
            >
                <Txt fontSize={"sm"} fontWeight={700} fontColor={"brand"}>{initials}</Txt>
            </TouchableOpacity>
        )
    }

    return (
        <ContainerView withoutBottomTabs bottomButton='CONTINUE'>
            <Section removeMarginTop unsetInnerSpacing>
                <View style={styles.sectionInner}>
                    <View style={styles.topBarContainer}>
                        <TouchableOpacity style={styles.staticViewBackBtn}>
                            <FeatherIcon name="chevron-left" size={ms(24, .25)} />
                        </TouchableOpacity>
                        <View style={styles.headerTitle}>
                            <Txt fontSize={'xl'} fontWeight={700}>Appointment Details</Txt>
                        </View>
                    </View>
                    <View style={styles.doctorProfilePhotoContainer}>
                        <SquircleView
                            style={styles.pfpSquircleOuter}
                            squircleParams={{
                                cornerSmoothing: 1,
                                cornerRadius: ms(22.25),
                                fillColor: 'transparent',
                                strokeWidth: ms(3, .25),
                                strokeColor: COLOR_PALLETE.BRAND_LIGHT_COLOR
                            }}
                        >
                            <SquircleView
                                style={styles.pfpSquircleInner}
                                squircleParams={{
                                    cornerSmoothing: 1,
                                    cornerRadius: ms(18.25),
                                    fillColor: '#fff',
                                }}
                            >
                                <FastImage
                                    style={{ width: '100%', height: '100%' }}
                                    source={{ uri: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" }}
                                    resizeMode={FastImage.resizeMode.cover}
                                />
                            </SquircleView>
                        </SquircleView>
                        <View style={styles.pfpInfoContainer}>
                            <Txt fontWeight={700} fontColor={"brand"} textAlign={"center"}>Dr. Eleanor Campbell</Txt>
                            <Txt fontSize={"sm"} fontWeight={700} fontColor={"secondary"} textAlign={"center"}>Cardiologist</Txt>
                        </View>

                    </View>
                </View>
            </Section>
            {/* <Section> */}
            <View style={styles.bodyContainer}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: ms(-8, .25) }}>
                    {state.appointmentDetail.map((data: any, index: number) => {
                        if (index === 0) {
                            return (
                                <View style={[styles.bodyBox, { width: '50%' }]} key={index.toString()}>
                                    <View style={[styles.bodyBoxContent, styles.row]}>
                                        <View style={styles.bodyBoxContentLeft}>
                                            <Txt fontSize={"sm"} fontWeight={500}>{data.output}</Txt>
                                            <Txt fontSize={"xs"} fontColor={"secondary"} fontWeight={500} style={styles.bodyBoxSubtitle}>Appointment Type</Txt>
                                        </View>

                                        <View style={styles.bodyBoxContentRight}>
                                            <FastImage
                                                style={styles.bodyBoxIcon}
                                                source={IMG_VIDEO_ICON}
                                                resizeMode="contain"
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                        if (index === 1) {
                            return (
                                <View style={[styles.bodyBox, { width: '50%' }]} key={index.toString()}>
                                    <View style={[styles.bodyBoxContent, styles.row]}>
                                        <View style={styles.bodyBoxContentLeft}>
                                            <Txt fontSize={"sm"} fontWeight={500}>{data.output}</Txt>
                                            <Txt fontSize={"xs"} fontColor={"secondary"} fontWeight={500} style={styles.bodyBoxSubtitle}>Phone Number</Txt>
                                        </View>

                                        <View style={styles.bodyBoxContentRight}>
                                            <FastImage
                                                style={styles.bodyBoxIcon}
                                                source={IMG_VIDEO_ICON_CIRCLE}
                                                resizeMode="contain"
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                        return (
                            <View style={[styles.bodyBox, { width: '33.33%' }]} key={index.toString()}>
                                <View style={[styles.bodyBoxContent]}>
                                    <View style={[styles.bodyBoxContentRight, styles.mb10]}>
                                        {data.label === 'date' &&
                                            <FastImage
                                                style={styles.bodyBoxIcon}
                                                source={IMG_CALENDAR_ICON}
                                                resizeMode="contain"
                                            />
                                        }
                                        {data.label === 'time_slot' &&
                                            <FastImage
                                                style={styles.bodyBoxIcon}
                                                source={IMG_CLOCK_ICON_CIRCLE}
                                                resizeMode="contain"
                                            />
                                        }
                                        {data.label === 'duration_in_minutes' &&
                                            <FastImage
                                                style={styles.bodyBoxIcon}
                                                source={IMG_TIMESLOT_ICON_CIRCLE}
                                                resizeMode="contain"
                                            />
                                        }
                                    </View>
                                    <View style={styles.bodyBoxContentLeft}>
                                        <Txt fontSize={"sm"} textAlign={'center'} fontWeight={500}>{data.output}</Txt>

                                        {data.label === 'date' &&
                                            <Txt fontSize={"xs"} textAlign={'center'} fontColor={"secondary"} fontWeight={500} style={styles.bodyBoxSubtitle}>Date</Txt>
                                        }
                                        {data.label === 'time_slot' &&
                                            <Txt fontSize={"xs"} textAlign={'center'} fontColor={"secondary"} fontWeight={500} style={styles.bodyBoxSubtitle}>Tine Slot</Txt>
                                        }
                                        {data.label === 'duration_in_minutes' &&
                                            <Txt fontSize={"xs"} textAlign={'center'} fontColor={"secondary"} fontWeight={500} style={styles.bodyBoxSubtitle}>Duration</Txt>
                                        }
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </View>
            <View style={styles.mt8}>
                <Section removeMarginTop>
                    <View style={[styles.row, styles.mb16, { justifyContent: 'space-between' }]}>
                        <View style={{ flex: 1 }}>
                            <Txt fontWeight={700} >Select Patient</Txt>
                        </View>
                        <View style={{}}>
                            <FlatList
                                inverted
                                horizontal={true}
                                data={state.patients}
                                renderItem={renderSelectPatientMenuItem}
                                keyExtractor={(item) => "select_patient" + item.id.toString()}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('PatientFormScreen')}
                            style={styles.addCircle}
                        >
                            <Txt fontSize={"xl"} fontWeight={500} fontColor={"secondary"}>+</Txt>
                        </TouchableOpacity>
                    </View>

                    {/* <AnimatePresence exitBeforeEnter> */}

                    {state.patients.map((item: any, i: any) => (
                        <AnimatePresence exitBeforeEnter>
                            {state.selectedPatientId === item.id &&
                                <MotiView
                                    style={styles.patientDetailsContainer}
                                    from={{
                                        opacity: 0,
                                        scale: 0.5,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                    }}
                                    key="asoidj"
                                >
                                    <View style={styles.patientDetailsRow}>
                                        <Txt fontColor={"secondary"} fontWeight={500}>Name</Txt>
                                        <Txt fontWeight={500}>{item.name}</Txt>
                                    </View>
                                    <View style={styles.patientDetailsRow}>
                                        <Txt fontColor={"secondary"} fontWeight={500}>Age</Txt>
                                        <Txt fontWeight={500}>{item.age}</Txt>
                                    </View>
                                    <View style={styles.patientDetailsRow}>
                                        <Txt fontColor={"secondary"} fontWeight={500}>Gender</Txt>
                                        <Txt fontWeight={500}>{item.gender}</Txt>
                                    </View>
                                    <View style={styles.patientDetailsRow}>
                                        <Txt fontColor={"secondary"} fontWeight={500}>Blood Group</Txt>
                                        <Txt fontWeight={500}>{item.blood_group}</Txt>
                                    </View>
                                </MotiView>
                            }
                        </AnimatePresence>
                    ))}
                    {/* </AnimatePresence> */}

                </Section>
            </View>
            {/* </Section> */}
        </ContainerView>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        paddingTop: ms(6, .25)
    },
    topBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: ms(10, .25),
        marginBottom: ms(30, .25)
    },
    sectionInner: {
        paddingBottom: ms(16, .25)
    },
    staticViewBackBtn: {
        width: BACK_BUTTON_SIZE,
        height: BACK_BUTTON_SIZE,
        borderRadius: ms(8, .25),
        backgroundColor: 'rgba(99,199,236,.3)',
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute',
        left: ms(10, .25),
        top: ms(10, .25)
    },
    pfpSquircleInner: {
        height: ms(71, .25),
        width: ms(71, .25),
        overflow: 'hidden',
        borderRadius: ms(20, .25)
    },
    pfpSquircleOuter: {
        height: ms(84, .25),
        width: ms(84, .25),
        justifyContent: 'center',
        alignItems: 'center'
    },
    doctorProfilePhotoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: ms(26, .25)
    },
    pfpInfoContainer: {
        marginTop: ms(12, .25)
    },
    bodyContainer: {
        paddingHorizontal: ms(16, 0.25),
        paddingTop: ms(8, .25),
        paddingBottom: 0,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: ms(10, 0.25),
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: ms(15, 0.25),
        width: ms(168, 0.25),
    },
    detailRowlabel: {
        paddingLeft: ms(8, 0.25),
        paddingRight: ms(15, 0.25),
    },
    detailRowOutput: {
        height: ms(56, 0.25),
        flex: 1,
        minWidth: ms(160, 0.25),
        // maxWidth: ms(380, 0.25),
        backgroundColor: COLOR_PALLETE.ACCENT_BACKGOUND_COLOR,
        borderRadius: ms(10, 0.25),
        // justifyContent: 'center',
        padding: ms(15, 0.25),
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryCodeContainer: {
        paddingVertical: ms(5, 0.25),
        paddingLeft: ms(7, 0.25),
        paddingRight: ms(14, 0.25),
        backgroundColor: '#efefef',
        marginRight: ms(10, 0.25),
        borderRadius: ms(5, 0.25),
    },
    countryCodeIcon: {
        position: 'absolute',
        right: ms(4, 0.25),
        top: ms(8, 0.25),
    },
    selectPatientRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: ms(10, 0.25),
        justifyContent: 'space-between',
    },
    selectPatient: {
        height: ms(36, 0.25),
        width: ms(36, 0.25),
        borderRadius: ms(35, 0.25),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: ms(10, 0.25)
    },
    paddingLeft5: {
        paddingLeft: ms(5, 0.25),
    },
    addPatient: {
        height: ms(35, 0.25),
        width: ms(35, 0.25),
        borderRadius: ms(35, 0.25),
        borderWidth: ms(2, 0.25),
        borderColor: COLOR_PALLETE.TERTIARY_TEXT_COLOR,
        borderStyle: 'dashed',
        backgroundColor: COLOR_PALLETE.ACCENT_BORDER_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    patientDetailsContainer: {
        paddingHorizontal: ms(15, 0.25),
        paddingTop: ms(20, 0.25),
        backgroundColor: COLOR_PALLETE.ACCENT_BACKGOUND_COLOR,
        borderRadius: ms(15, 0.25),
    },
    patientDetailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: ms(20, 0.25),
    },
    bodyBox: {
        padding: ms(8, .25),
        width: '33.33%',
    },
    bodyBoxContent: {
        backgroundColor: COLOR_PALLETE.WHITE_COLOR,
        padding: ms(16, .25),
        flex: 1,
        borderRadius: ms(8, .25),
        alignItems: 'center'
    },
    bodyBoxContentLeft: {
        flex: 1,
        paddingRight: ms(6, .25)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyBoxSubtitle: {
        marginTop: ms(4, .25),
        opacity: .5
    },
    bodyBoxContainer: {
        flexDirection: 'row'
    },
    bodyBoxContentRight: {
        height: ms(24, .25),
        width: ms(24, .25),
    },
    bodyBoxIcon: {
        width: '100%',
        height: '100%'
    },
    mb10: {
        marginBottom: ms(10, .25)
    },
    mb16: {
        marginBottom: ms(16, .25)
    },
    mt8: {
        marginTop: ms(8, .25)
    },
    mt16: {
        marginTop: ms(16, .25)
    },
    addCircle: {
        height: ms(36, .25),
        width: ms(36, .25),
        backgroundColor: COLOR_PALLETE.ACCENT_BORDER_COLOR,
        borderWidth: ms(2, .25),
        borderStyle: 'dashed',
        borderColor: COLOR_PALLETE.SECONDARY_TEXT_COLOR,
        borderRadius: ms(30, .25),
        justifyContent: 'center',
        alignItems: 'center'
    }
})