import React, { useReducer, useRef, useState } from 'react';
import {
    FlatList,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Txt from '../components/UIComponent/Txt';
import ContainerView from '../components/ContainerView';
import { Section } from '../components/Section';
import { ms } from 'react-native-size-matters';

import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import { COLOR_PALLETE } from '../utils/ColorConstant';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withSequence,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { trigger } from 'react-native-haptic-feedback';
import { SquircleView } from 'react-native-figma-squircle';
import FastImage from 'react-native-fast-image';

import { CATEGORIES } from '../data/categories';
import CategoryCard, { CategoryItemProps } from '../components/CategoryCard';

import { SimpleGrid } from 'react-native-super-grid';
import {
    IMG_LOGIN_ICON,
    IMG_USER_PROFILE_1,
    IMG_USER_PROFILE_2,
    IMG_USER_PROFILE_3,
    IMG_VIDEO_ICON,
    IMG_WALKIN_ICON,
} from '../assets/images';
import DoctorCard, { DoctorCardProps } from '../components/DoctorCard';
import {
    NavigationProp,
    ParamListBase,
    RouteProp,
} from '@react-navigation/native';
import { DOCTORS } from '../data/doctors';
import Btn from '../components/UIComponent/Btn';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
// import { formatArrayOfObjectToString } from './HomeScreen';
// import { useFetchSpecializations } from '../hooks/custom_hooks';
import { LinearGradient } from 'react-native-svg';
// import { useQuery } from 'react-query';
// import { fetchDoctors } from '../utils/api/ApiRequest';
import LoginScreen from './LoginScreen';

const BACK_BUTTON_SIZE = ms(35, 0.25);

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const HOW_IT_WORKS_DATA = [
    {
        title: 'Digital Prescription',
        icon: IMG_USER_PROFILE_1,
    },
    {
        title: 'Share reports on chat',
        icon: IMG_USER_PROFILE_2,
    },
    {
        title: 'Free Follow-up in 3days',
        icon: IMG_USER_PROFILE_3,
    },
];
const APPOINTMENT_TYPES = [
    {
        id: 0,
        type: 'video',
        title: 'Video Consultation',
    },
    {
        id: 1,
        type: 'walkin',
        title: 'Walk In',
    },
];

type Params = {
    params: {
        uuid: string;
    };
};

// const fetchDoctorRequest = ({ uuid }: { uuid: string }) =>
//     fetchDoctors({ uuid }).then(({ data }) => data?.payload);

export default function ProfileScreen({
    navigation,
    route,
    }: {
        navigation: NavigationProp<ParamListBase>;
        route: RouteProp<ParamListBase, 'DoctorProfile'> & { params: any };
    }) {
    // const { uuid } = route.params;
    // const { data: doctor, isLoading } = useQuery(
    //     `single_doctor_uuid${uuid}`,
    //     () => fetchDoctorRequest({ uuid }),
    //     {
    //         keepPreviousData: false,
    //         refetchOnWindowFocus: false,
    //     },
    // );

    // const {
    //     specializations,
    //     isLoading: isLoadingSpecializations,
    //     error: errorSpecializations,
    // } = useFetchSpecializations();

    // console.log(doctor?.specializations);

    const [selectedAppointmentTypeId, setSelectedAppointmentTypeId] =
        useState<number>(0);
    const [state, setState] = useReducer(
        (state: any, newState: any) => ({ ...state, ...newState }),
        {
            categories: CATEGORIES,
            doctors: DOCTORS,
        },
    );
    const [like, setLike] = useState(false);
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));
    const animatedPressableStyle = useAnimatedStyle(() => ({
        backgroundColor: like
            ? withDelay(700, withTiming(COLOR_PALLETE.BRAND_LIGHT_30))
            : withTiming(COLOR_PALLETE.GRAY_COLOR),
    }));

    const handleHeartPress = () => {
        setLike(!like);
        scale.value = withSequence(
            withSpring(like ? 0.9 : 2, { mass: 1, damping: 8, stiffness: 300 }),
            withTiming(1),
        );
        trigger(like ? 'impactLight' : 'notificationSuccess');
    };

    const appointmentTypeModalRef = useRef<Modalize>(null);
    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };
    const onOpenAppointmentTypeModal = () => {
        appointmentTypeModalRef.current?.open();
    };

    const appointmentTypeGridBackgroundScales = APPOINTMENT_TYPES.map(
        (_, index) => useSharedValue(index === 0 ? 1 : 0),
    );
    const appointmentTypeGridBackgroundOpacities = APPOINTMENT_TYPES.map(
        (_, index) => useSharedValue(index === 0 ? 1 : 0),
    );
    const handleAppointmentTypePress = (id: number) => {
        if (selectedAppointmentTypeId !== null) {
            appointmentTypeGridBackgroundScales[selectedAppointmentTypeId].value =
                withTiming(0.5, { duration: 300 });
            appointmentTypeGridBackgroundOpacities[selectedAppointmentTypeId].value =
                withTiming(0, { duration: 300 });
        }
        setSelectedAppointmentTypeId(id);
        appointmentTypeGridBackgroundScales[id].value = withSpring(1, {
            damping: 12,
            stiffness: 200,
        });
        appointmentTypeGridBackgroundOpacities[id].value = withTiming(1);
        trigger();
    };

    const didPressAppointmentTypeButton = () => {
        appointmentTypeModalRef.current?.close();

        setTimeout(() => {
            navigation.navigate('TimeSlotScreen');
        }, 300);
    };

    const renderCategoryMenuitem = ({ item }: { item: CategoryItemProps }) => {
        return (
            <CategoryCard
                style={{ backgroundColor: COLOR_PALLETE.GRAY_COLOR }}
                id={item.id}
                image={item.image}
                title={item.title}
            />
        );
    };

    const renderDoctorCard = ({ item }: { item: DoctorCardProps }) => {
        return (
            <>
                <DoctorCard
                    name={item.name}
                    speciality={item.speciality}
                    image={item.image}
                    onPress={() =>
                        navigation.navigate('ProfileScreen', { doctor: item })
                    }
                />
            </>
        );
    };

    return (
        <>
            <ContainerView withoutBottomTabs>
                <View>
                    <Section removeMarginTop unsetInnerSpacing>
                        <View style={styles.sectionInner}>
                            <View style={styles.topBarContainer}>
                                <View>
                                    <TouchableOpacity
                                        style={styles.staticViewBackBtn}
                                        onPress={() => navigation.goBack()}>
                                        <FeatherIcon name="chevron-left" size={ms(24, 0.25)} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.headerTitle}>
                                    <Txt fontSize={"xl"} fontWeight={700}>
                                        Doctor Profile
                                    </Txt>
                                </View>
                                <View>
                                    <AnimatedPressable
                                        style={[
                                            styles.buttonGroupedItem,
                                            styles.buttonGroupedItemTop,
                                            animatedPressableStyle,
                                        ]}
                                        onPress={handleHeartPress}>
                                        <Animated.View style={[animatedStyle]}>
                                            <AntDesignIcon
                                                name={`${like ? 'heart' : 'hearto'}`}
                                                size={ms(18, 0.25)}
                                                color={COLOR_PALLETE.BRAND_COLOR}
                                            />
                                        </Animated.View>
                                    </AnimatedPressable>
                                    <TouchableOpacity
                                        style={[
                                            styles.buttonGroupedItem,
                                            styles.buttonGroupedItemBottom,
                                        ]}>
                                        <FontistoIcon name="share" size={ms(18, 0.25)} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.doctorProfilePhotoContainer}>
                                <SquircleView
                                    style={styles.pfpSquircleOuter}
                                    squircleParams={{
                                        cornerSmoothing: 1,
                                        cornerRadius: ms(22.25),
                                        fillColor: 'transparent',
                                        strokeWidth: ms(3, 0.25),
                                        strokeColor: COLOR_PALLETE.BRAND_LIGHT_COLOR,
                                    }}>
                                    <SquircleView
                                        style={styles.pfpSquircleInner}
                                        squircleParams={{
                                            cornerSmoothing: 1,
                                            cornerRadius: ms(18.25),
                                            fillColor: '#fff',
                                        }}>
                                        <FastImage
                                            style={{ width: '100%', height: '100%' }}
                                            source={{
                                                uri: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                                            }}
                                            resizeMode={FastImage.resizeMode.cover}
                                        />
                                    </SquircleView>

                                    <View style={styles.activebadge} />
                                </SquircleView>
                                <View style={styles.pfpInfoContainer}>
                                    {/* <Txt weight='bold' color="brand" align="center">{singleDoctor.name_en}</Txt> */}
                                    <Txt fontWeight={700} fontColor={"brand"} textAlign={"center"}>
                                        {/* {DOCTORS} */}Hello
                                    </Txt>
                                    {/* <Txt
                                        fontSize={"sm"}
                                        fontWeight={700}
                                        fontColor={"secondary"}
                                        textAlign={"center"}>
                                        {formatArrayOfObjectToString({
                                            arrayObject: doctor?.specializations,
                                            field: 'name_en',
                                        })}
                                    </Txt> */}
                                </View>
                            </View>
                            <View style={styles.userContentContainer}>
                                <Txt fontSize={"lg"} fontWeight={700}>
                                    About
                                </Txt>
                                <View style={styles.profileDescriptionContainer}>
                                    {/* <Txt
                                        numberOfLines={3}
                                        style={styles.profileDescription}
                                        fontSize={"sm"}
                                        fontColor={"secondary"}
                                        >
                                        {doctor?.about_en}
                                    </Txt> */}
                                    <TouchableOpacity activeOpacity={1}>
                                        <Txt fontWeight={700} style={styles.readMoreText}>
                                            ...more
                                        </Txt>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.userContentListContainer}>
                                    <View
                                        style={[
                                            styles.userContentListItem,
                                            styles.userContentListItemFirst,
                                        ]}>
                                        <View style={styles.userContentListItemLeft}>
                                            <View style={styles.userContentListIcon}>
                                                <IoniconsIcon
                                                    name="videocam"
                                                    color={COLOR_PALLETE.BRAND_COLOR}
                                                    size={ms(16, 0.25)}
                                                />
                                            </View>
                                            <Txt fontColor={"brand"}>Video Consultation : 30 KD</Txt>
                                        </View>
                                        <View style={styles.userContentListItemRight}>
                                            <Txt fontSize={"sm"} fontColor={"secondary"}>
                                                30m
                                            </Txt>
                                        </View>
                                    </View>
                                    <View style={styles.userContentListItem}>
                                        <View style={styles.userContentListItemLeft}>
                                            <View style={styles.userContentListIcon}>
                                                <FontistoIcon
                                                    name="map-marker-alt"
                                                    color={COLOR_PALLETE.BRAND_COLOR}
                                                    size={ms(16, 0.25)}
                                                />
                                            </View>
                                            <Txt fontColor={"brand"}>Walk-In : 30 KD</Txt>
                                        </View>
                                        <View style={styles.userContentListItemRight}>
                                            <Txt fontSize={"sm"} fontColor={"secondary"}>
                                                30m
                                            </Txt>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Section>
                    {/* <Section
                        title="Specialization"
                        style={{ paddingHorizontal: 0, paddingBottom: 0 }}>
                        <FlatList
                            contentContainerStyle={styles.flatList}
                            horizontal={true}
                            data={(specializations?.payload?.items ?? []).map((item: any) => ({
                                id: item.uuid,
                                title: item.name_en,
                                // image: IMG_CARDIOLOGY_THEME_ICON,
                                iconBg: '#E6EFFC'
                            }))}
                            renderItem={renderCategoryMenuitem}
                            keyExtractor={item => 'categories' + item.id.toString()}
                        />
                    </Section> */}
                    <Section title="How it works">
                        <View style={{ marginHorizontal: ms(-8, 0.25) }}>
                            <SimpleGrid
                                listKey={'asd'}
                                spacing={0}
                                itemDimension={ms(96, 0.25)}
                                data={HOW_IT_WORKS_DATA}
                                renderItem={({ item }) => (
                                    <View style={{ paddingHorizontal: ms(8, 0.25) }}>
                                        <View
                                            style={{
                                                alignItems: 'center',
                                                paddingHorizontal: ms(6, 0.25),
                                                paddingTop: ms(16, 0.25),
                                                paddingBottom: ms(8, 0.25),
                                                backgroundColor: COLOR_PALLETE.GRAY_COLOR,
                                                borderRadius: ms(10, 0.25),
                                            }}>
                                            <FastImage
                                                style={{ height: ms(28, 0.25), width: ms(28, 0.25) }}
                                                source={item.icon}
                                            />
                                            <Txt
                                                fontColor={"secondary"}
                                                fontSize={"sm"}
                                                textAlign={"center"}
                                                style={{ marginTop: ms(10, 0.25) }}>
                                                {item.title}
                                            </Txt>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                    </Section>
                    <Section
                        title="Doctors from this category"
                        btnText="View All"
                        style={{ paddingHorizontal: 0 }}>
                        <FlatList
                            contentContainerStyle={styles.flatList}
                            horizontal={true}
                            data={state.doctors}
                            keyExtractor={(item, index) => 'home_doctors' + index.toString()}
                            renderItem={renderDoctorCard}
                        />
                    </Section>
                </View>
            </ContainerView>

            <View style={{ marginHorizontal: ms(16, 0.25) }}>
                <Btn
                    title="BOOK AN APPOINTMENT"
                    onPress={onOpen}
                    onLongPress={onOpenAppointmentTypeModal}
                />
                <SafeAreaView />
            </View>

            <Portal>
                <Modalize
                    ref={modalizeRef}
                    adjustToContentHeight
                    modalStyle={styles.modalStyle}
                    handleStyle={styles.modalHandleStyle}>
                    <View style={styles.modalContainer}>
                        <Section>
                            <View style={styles.modalContentContainer}>
                                <View style={styles.modalIconContainer}>
                                    <FastImage
                                        style={{ height: '100%', width: '100%' }}
                                        source={IMG_LOGIN_ICON}
                                        resizeMode="contain"
                                    />
                                </View>
                                <Txt textAlign={"center"} fontSize={"xl"} fontWeight={700}>
                                    Login or Register
                                </Txt>
                                <View style={styles.modalDescription}>
                                    <Txt textAlign={"center"} fontSize={"sm"} fontColor={"secondary"}>
                                        Please login or register to continue booking appointment
                                        with your doctor
                                    </Txt>
                                </View>
                            </View>
                        </Section>
                        <View style={styles.modalBtnContainer}>
                            <Btn title="Login" onPress={() => navigation.navigate('LoginScreen')} />
                            <View style={styles.modalBtnItem}>
                                <Btn title="Register" type="variant-2" onPress={() => navigation.navigate('SignUpScreen')} />
                            </View>
                        </View>
                    </View>
                    <SafeAreaView style={{ backgroundColor: 'transparent' }} />
                </Modalize>

                <Modalize
                    ref={appointmentTypeModalRef}
                    adjustToContentHeight
                    modalStyle={styles.modalStyle}
                    handleStyle={styles.modalHandleStyle}>
                    <View style={[styles.appointmentModalContainer]}>
                        <View style={styles.appointmentModalHeaderContainer}>
                            <Txt fontSize={"xl"} textAlign={"center"} fontWeight={700}>
                                Choose Appointment type
                            </Txt>
                        </View>
                        <View style={styles.row}>
                            {APPOINTMENT_TYPES.map((item, index) => {
                                const isSelected = selectedAppointmentTypeId === item.id;

                                const animatedUnderlayStyles = useAnimatedStyle(() => {
                                    return {
                                        transform: [
                                            { scale: appointmentTypeGridBackgroundScales[index].value },
                                        ],
                                        opacity:
                                            appointmentTypeGridBackgroundOpacities[index].value,
                                    };
                                });

                                return (
                                    <AnimatedPressable
                                        onPress={() => handleAppointmentTypePress(item.id)}
                                        key={index.toString()}
                                        style={[
                                            styles.equalWidth,
                                            styles.alignItemsCenter,
                                            styles.appointmentSelectGrid,
                                        ]}>
                                        <View style={styles.appointmentTypeIconContainer}>
                                            <FastImage
                                                style={{ width: '100%', height: '100%' }}
                                                source={
                                                    item.type === 'walkin'
                                                        ? IMG_WALKIN_ICON
                                                        : IMG_VIDEO_ICON
                                                }
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <Txt fontSize={"sm"} fontWeight={700}>
                                            {item.title}
                                        </Txt>
                                        <Animated.View
                                            style={[
                                                styles.appointmentSelectGridUnderlayView,
                                                animatedUnderlayStyles,
                                            ]}
                                        />
                                    </AnimatedPressable>
                                );
                            })}
                        </View>
                        <View style={styles.modalBtnItem}>
                            <Btn
                                title="BOOK AN APOINTMENT"
                                onPress={didPressAppointmentTypeButton}
                            />
                        </View>
                    </View>
                    <SafeAreaView style={{ backgroundColor: 'transparent' }} />
                </Modalize>
            </Portal>
        </>
    );
}

const styles = StyleSheet.create({
    appointmentTypeIconContainer: {
        width: ms(32, 0.25),
        height: ms(24, 0.25),
        marginBottom: ms(12, 0.25),
    },
    appointmentSelectGridUnderlayView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLOR_PALLETE.WHITE_COLOR,
        borderRadius: ms(14, 0.25),
        zIndex: -1,
    },
    appointmentSelectGrid: {
        paddingVertical: ms(20, 0.25),
        paddingHorizontal: ms(24, 0.25),
        borderRadius: ms(14, 0.25),
        position: 'relative',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    equalWidth: {
        flex: 1,
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    modalHandleStyle: {
        width: ms(120, 0.25),
        backgroundColor: COLOR_PALLETE.WHITE_COLOR_40,
        bottom: 'auto',
        top: 0,
    },
    modalStyle: {
        paddingHorizontal: ms(16, 0.25),
        backgroundColor: 'transparent',
        borderRadius: ms(16, 0.25),
    },
    modalBtnItem: {
        marginTop: ms(16, 0.25),
    },
    modalBtnContainer: {
        paddingHorizontal: ms(16, 0.25),
        marginTop: ms(16, 0.25),
    },
    modalDescription: {
        marginTop: ms(6, 0.25),
        paddingHorizontal: ms(20, 2.5),
    },
    modalContentContainer: {
        alignItems: 'center',
    },
    modalIconContainer: {
        width: ms(44, 0.25),
        height: ms(44, 0.25),
        marginBottom: ms(18, 0.25),
    },
    modalContainer: {
        backgroundColor: COLOR_PALLETE.GRAY_COLOR,
        borderRadius: ms(16, 0.25),
        paddingBottom: ms(16, 0.25),
    },
    appointmentModalContainer: {
        backgroundColor: COLOR_PALLETE.GRAY_COLOR,
        borderRadius: ms(16, 0.25),
        padding: ms(16, 0.25),
    },
    appointmentModalHeaderContainer: {
        marginBottom: ms(20, 0.25),
    },
    flatList: {
        paddingHorizontal: ms(16, 0.25),
        paddingBottom: ms(16, 0.25),
    },
    userContentListItemFirst: {
        paddingBottom: ms(6, 0.25),
        marginBottom: ms(6, 0.25),
        borderBottomWidth: ms(0.75, 0.25),
        borderColor: '#EAEAEA',
    },
    userContentListIcon: {
        marginRight: ms(8, 2.5),
        width: ms(16, 0.25),
        justifyContent: 'center',
        alignItems: 'center',
    },
    userContentListItemRight: {},
    userContentListItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userContentListItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userContentListContainer: {
        paddingHorizontal: ms(14, 0.25),
        paddingVertical: ms(10, 0.25),
        borderRadius: ms(8, 0.25),
        borderWidth: ms(0.75, 0.25),
        borderColor: '#EAEAEA',
        backgroundColor: COLOR_PALLETE.GRAY_COLOR,
    },
    profileDescriptionContainer: {
        marginBottom: ms(16, 0.25),
    },
    readMoreText: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#fff',
    },
    profileDescription: {
        marginTop: ms(2, 0.25),
    },
    userContentContainer: {
        paddingHorizontal: ms(16, 0.25),
    },
    pfpInfoContainer: {
        marginTop: ms(12, 0.25),
    },
    activebadge: {
        height: ms(16, 0.25),
        width: ms(16, 0.25),
        borderRadius: ms(10, 0.25),
        backgroundColor: COLOR_PALLETE.SUCCESS_COLOR_LIGHT,
        position: 'absolute',
        bottom: 0,
        right: ms(4, 0.25),
        borderWidth: ms(3, 0.25),
        borderColor: COLOR_PALLETE.WHITE_COLOR,
    },
    pfpSquircleInner: {
        height: ms(71, 0.25),
        width: ms(71, 0.25),
        overflow: 'hidden',
        borderRadius: ms(20, 0.25),
    },
    pfpSquircleOuter: {
        height: ms(84, 0.25),
        width: ms(84, 0.25),
        justifyContent: 'center',
        alignItems: 'center',
    },
    doctorProfilePhotoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: ms(26, 0.25),
    },
    buttonGroupedItem: {
        paddingVertical: ms(9, 0.25),
        paddingHorizontal: ms(8, 0.25),
        backgroundColor: COLOR_PALLETE.GRAY_COLOR,
    },
    buttonGroupedItemTop: {
        borderTopLeftRadius: ms(8, 0.25),
        borderTopRightRadius: ms(8, 0.25),
    },
    buttonGroupedItemBottom: {
        borderBottomLeftRadius: ms(8, 0.25),
        borderBottomRightRadius: ms(8, 0.25),
    },
    headerTitle: {
        paddingTop: ms(6, 0.25),
    },
    topBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: ms(10, 0.25),
        paddingBottom: ms(6, 0.25),
    },
    sectionInner: {
        paddingBottom: ms(16, 0.25),
    },
    staticViewBackBtn: {
        width: BACK_BUTTON_SIZE,
        height: BACK_BUTTON_SIZE,
        borderRadius: ms(8, 0.25),
        backgroundColor: 'rgba(99,199,236,.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
