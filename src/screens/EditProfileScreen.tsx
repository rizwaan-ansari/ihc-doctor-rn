/* eslint-disable prettier/prettier */
import React, { useReducer } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import ContainerView from '../components/ContainerView';
import Txt from '../components/UIComponent/Txt';
import { useNavigation } from "@react-navigation/native";
import InputFieldAnimated from '../components/UIComponent/InputFieldAnimated';
import SelectFieldOutline from '../components/UIComponent/SelectFieldOutline';
import { ms } from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { COLOR_PALLETE } from '../utils/ColorConstant';
import PillView from '../components/UIComponent/PillView';
import { useTranslation } from 'react-i18next';
import { Section } from '../components/Section';

const SPECIALIZATION = [
    { id: '1', specialization: 'ENT', icon: 'https://i.ibb.co/hR30kkq/ent-grey-icon.png' },
    { id: '3', specialization: 'Obesity', icon: 'https://i.ibb.co/rb2019r/obesity-grey-icon.png' },
    { id: '4', specialization: 'Dermatology', icon: 'https://i.ibb.co/HzLCdXc/dermatology-grey-icon.png' },
    { id: '2', specialization: 'Cardiology', icon: 'https://i.ibb.co/3NFdVL6/cardiology-grey-icon.png' },
    { id: '5', specialization: 'Neurology', icon: 'https://i.ibb.co/RhFSqP0/neurology-grey-icon.png' },
    { id: '7', specialization: 'Urology', icon: 'https://i.ibb.co/VjJV0jT/urology-grey-icon.png' },
];

const LABELS = [
    {
        id: 1,
        label: 'Yes',
        selectedIcon: 'checkcircle',
        icon: 'checkcircleo',
    },
    {
        id: 2,
        label: 'No',
        selectedIcon: 'closecircle',
        icon: 'closecircleo',
    },
];

// interface Props {
//   navigation: any;
// }

interface State {
    nameText: string | null;
    emailText: string | null;
    categoryText: string | null;
    numberText: string | null;
    aboutText: string | null;
    selectedLabelId1: number;
    selectedLabelId2: number;
    specialization: { id: string; specialization: string; icon: string }[];
}

export default function EditProfileScreen() {
    const { t } = useTranslation(['doctor_home', 'common']);
    const navigation = useNavigation()
    const [state, setState] = useReducer((state: State, newState: Partial<State>) => ({ ...state, ...newState }), {
        nameText: null,
        emailText: null,
        categoryText: null,
        numberText: null,
        aboutText: null,
        selectedLabelId1: 1,
        selectedLabelId2: 0,
        specialization: SPECIALIZATION,
    });

    const onChangeName = (text: string) => {
        setState({ nameText: text });
    };

    const onChangeEmail = (text: string) => {
        setState({ emailText: text });
    };

    const onChangeCategories = (text: string) => {
        setState({ categoryText: text });
    };

    const onChangeNumber = (text: string) => {
        setState({ numberText: text });
    };

    const onChangeAbout = (text: string) => {
        setState({ aboutText: text });
    };

    const renderSpecializationPill: ListRenderItem<{ id: string; specialization: string; icon: string }> = ({ item }) => {
        return (
            <PillView
                containerStyle={{ borderRadius: ms(5, 0.25) }}
                id={item.id}
                icon={item.icon}
                label={item.specialization}
            />
        );
    };

    return (
        <ContainerView
            title={t('Edit Profile')}
            bottomBtnGroupStyle={{ marginBottom: ms(15, 0.25) }}
            onPressPrimary={() => navigation.goBack()}
        >
            <Section unsetInnerSpacing>
                <View style={styles.paddingH7}>
                    <View style={styles.profilepicSection}>
                        <TouchableOpacity style={styles.profileContainer}>
                            <FastImage
                                style={styles.profileImage}
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                                }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                            {/* <View style={styles.editImageLabelContainer}>
                <Txt size="small" color="white" weight="semiBold" style={styles.editImageLabel}>
                  {t('doctor_home:edit')}
                </Txt>
              </View> */}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <InputFieldAnimated onChangeText={onChangeName} value={state.nameText} label={t('Name')} />
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <InputFieldAnimated onChangeText={onChangeEmail} value={state.emailText} label={t('Email Address')} />
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <InputFieldAnimated onChangeText={onChangeCategories} value={state.categoryText} label={t('Categories')} />
                    </View>
                    <View style={styles.mobileNumberInputContainer}>
                        <View style={styles.countryCodeContainer}>
                            <SelectFieldOutline
                                group
                                value={'+965'}
                                label={'isd_code'}
                                containerStyle={{ maxHeight: ms(53, 0.25) }}
                            />
                        </View>
                        <View style={styles.mobileNumberInputField}>
                            <InputFieldAnimated onChangeText={onChangeNumber} value={state.numberText} label={t('Phone Number')} keyboardType={'numeric'} />
                        </View>
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <InputFieldAnimated onChangeText={onChangeAbout} value={state.aboutText} label={t('About')} multiline={true} />
                    </View>
                    <View style={styles.specializationSection}>
                        <Txt fontWeight={700} fontColor={"brand"} style={styles.specializationTitle}>
                            {t('Specialization')}
                        </Txt>
                        <View style={styles.directionRow}>
                            <TouchableOpacity style={styles.addSpecializationBtn}>
                                <FeatherIcon name={'plus'} size={ms(20, 0.25)} color={COLOR_PALLETE.TERTIARY_TEXT_COLOR} />
                            </TouchableOpacity>
                            <FlatList
                                // style={styles.specializationFlatlist}
                                data={state.specialization}
                                renderItem={renderSpecializationPill}
                                horizontal={true}
                            />
                        </View>
                    </View>
                    <View style={styles.selectFeatureSection}>
                        <Txt fontWeight={700} fontColor={"brand"}>
                            {t('Enable video call')}
                        </Txt>
                        <Txt fontSize={"sm"} fontWeight={500} fontColor="tertiary" style={styles.selectFeatureSubTitle}>
                            {t('You can enable this video call now or enable it later any time.')}
                        </Txt>
                        <View style={styles.selectFeatureBtnGroup}>
                            {LABELS.map((item) => {
                                const selected = item.id === state.selectedLabelId1;
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={[
                                            styles.selectFeatureBtn,
                                            { backgroundColor: selected ? COLOR_PALLETE.BRAND_LIGHT_COLOR : COLOR_PALLETE.ACCENT_BACKGOUND_COLOR },
                                        ]}
                                        onPress={() => setState({ selectedLabelId1: item.id })}
                                    >
                                        <Txt fontWeight={600} style={[{ color: selected ? COLOR_PALLETE.BRAND_COLOR : COLOR_PALLETE.SECONDARY_TEXT_COLOR }]}>
                                            {t('' + item.label)}
                                        </Txt>
                                        <AntDesignIcon name={selected ? item.selectedIcon : item.icon} size={ms(12)} color={selected ? COLOR_PALLETE.BRAND_COLOR : COLOR_PALLETE.TERTIARY_TEXT_COLOR} />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                        <View style={styles.mobileNumberInputField}>
                            <InputFieldAnimated
                                onChangeText={onChangeNumber}
                                value={state.numberText}
                                label={t('Video call price')}
                                keyboardType={'numeric'}
                            />
                        </View>
                    </View>
                    <View style={styles.selectFeatureSection}>
                        <Txt fontWeight={700} fontColor={"brand"}>
                            {t('Enable walk-in appointment')}
                        </Txt>
                        <Txt fontSize={"sm"} fontWeight={500} fontColor={"tertiary"} style={styles.selectFeatureSubTitle}>
                            {t('You can enable this video call now or enable it later any time.')}
                        </Txt>
                        <View style={styles.selectFeatureBtnGroup}>
                            {LABELS.map((item) => {
                                const selected = item.id === state.selectedLabelId2;
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={[
                                            styles.selectFeatureBtn,
                                            { backgroundColor: selected ? COLOR_PALLETE.BRAND_LIGHT_COLOR : COLOR_PALLETE.ACCENT_BACKGOUND_COLOR },
                                        ]}
                                        onPress={() => setState({ selectedLabelId2: item.id })}
                                    >
                                        <Txt fontSize={"xs"} fontWeight={600} style={[{ color: selected ? COLOR_PALLETE.BRAND_COLOR : COLOR_PALLETE.SECONDARY_TEXT_COLOR }]}>
                                            {t('' + item.label)}
                                        </Txt>
                                        <AntDesignIcon name={selected ? item.selectedIcon : item.icon} size={ms(12, 0.25)} color={selected ? COLOR_PALLETE.BRAND_COLOR : COLOR_PALLETE.TERTIARY_TEXT_COLOR} />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                        <View style={styles.mobileNumberInputField}>
                            <InputFieldAnimated onChangeText={onChangeNumber} value={state.numberText} label={t('Walk-in appointment price')} keyboardType={'numeric'} />
                        </View>
                    </View>
                </View>
            </Section>
        </ContainerView>
    );
}

const styles = StyleSheet.create({
    paddingH7: {
        paddingHorizontal: ms(7.5, 0.25),
        paddingBottom: ms(20, 0.25),
    },
    inputFieldContainer: {
        paddingHorizontal: ms(7.5, 0.25),
        paddingBottom: ms(15, 0.25),
    },
    profilepicSection: {
        width: '100%',
        paddingTop: ms(10, 0.25),
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: ms(20, 0.25),
    },
    profileContainer: {
        height: ms(90, 0.25),
        width: ms(90, 0.25),
        borderRadius: ms(32, 0.25),
        overflow: 'hidden',
    },
    profileImage: {
        height: '100%',
        width: '100%',
    },
    editImageLabelContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: ms(20, 0.25),
        backgroundColor: COLOR_PALLETE.BLACK_COLOR_50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editImageLabel: {
        textAlign: 'center',
    },
    mobileNumberInputContainer: {
        flexDirection: 'row',
        paddingHorizontal: ms(7.5, 0.25),
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: ms(15, 0.25),
    },
    countryCodeContainer: {
        width: ms(100, 0.25),
        marginRight: ms(15, 0.25),
    },
    mobileNumberInputField: {
        flexGrow: 1,
    },
    specializationSection: {
        paddingHorizontal: ms(7.5, 0.25),
        paddingBottom: ms(15, 0.25),
        paddingTop: ms(5, 0.25),
    },
    specializationTitle: {
        marginBottom: ms(10, 0.25),
    },
    directionRow: {
        flexDirection: 'row',
    },
    addSpecializationBtn: {
        height: ms(35, 0.25),
        width: ms(35, 0.25),
        backgroundColor: COLOR_PALLETE.ACCENT_BACKGOUND_COLOR,
        borderRadius: ms(5, 0.25),
        borderWidth: ms(1, 0.25),
        borderColor: COLOR_PALLETE.BRAND_COLOR_40,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: ms(10, 0.25),
    },
    selectFeatureSection: {
        paddingHorizontal: ms(7.5, 0.25),
        marginBottom: ms(15, 0.25),
    },
    selectFeatureSubTitle: {
        marginBottom: ms(10, 0.25),
        marginTop: ms(2, 0.25),
    },
    selectFeatureBtnGroup: {
        flexDirection: 'row',
        marginBottom: ms(16, 0.258),
    },
    selectFeatureBtn: {
        width: ms(62, 0.25),
        height: ms(32, 0.25),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: ms(10, 0.25),
        backgroundColor: COLOR_PALLETE.ACCENT_BACKGOUND_COLOR,
        borderRadius: ms(5, 0.25),
        marginRight: ms(10, 0.25),
    },
});
