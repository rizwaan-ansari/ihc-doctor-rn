import React, {useReducer} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, I18nManager } from 'react-native'
import FastImage from 'react-native-fast-image';
import { ms } from 'react-native-size-matters';
import ContainerView from '../components/ContainerView'
import FeatherIcon from 'react-native-vector-icons/Feather';
import InputField from '../components/InputField';
import Txt from '../components/UIComponent/Txt';
import { useTranslation } from 'react-i18next';
import { COLOR_PALLETE } from '../utils/ColorConstant';
import { Section } from '../components/Section';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import PATIENT_LIST_DATA from '../data/patientList';



export default function PatientListScreen(props:any) {
    const { t } = useTranslation(['doctor_home', 'common']);
    const [state, setState] = useReducer((state:any, newState:any) => ({...state, ...newState}), {
        text: null,
        patients: PATIENT_LIST_DATA,
    });
    const onChangeText = (text:string) => {
        setState({text: text});
    }
    return (
        <>
            <ContainerView title={t("Patients")}>
                <Section removeMarginTop unsetInnerSpacing>
                    <View style={styles.searchBarContainer}>
                        <InputField 
                            search
                            placeholder={t("Search patient...")}
                            onChangeText={onChangeText}
                            value={state.text}
                            placeholderTextColor={COLOR_PALLETE.TERTIARY_TEXT_COLOR}
                        />
                    </View>
                    <View style={styles.patientListContainer}>
                        {state.patients.map((item:any)=>{
                            return (
                                <TouchableOpacity style={styles.patientCard}>
                                    <View style={styles.patientCardLeft}>
                                        <View style={styles.patientCardAvatarContainer}>
                                            <FastImage
                                                style={styles.patientCardAvatar}
                                                source={{
                                                    uri: item.avatar
                                                }}
                                                resizeMode={FastImage.resizeMode.cover}
                                            />
                                        </View>
                                        <View>
                                            <Txt fontWeight={600} numberOfLines={1} fontColor={'brand'} style={styles.patientName}>{item.name}</Txt>
                                            <Txt fontWeight={600} fontColor={'secondary'} fontSize={'sm'} >{item.age} years old</Txt>
                                        </View>
                                    </View>
                                    <View style={styles.patientCardRight}>
                                        <FeatherIcon name={I18nManager.isRTL ? 'arrow-up-left' : 'arrow-up-right'} size={ms(16)} color={COLOR_PALLETE.BRAND_COLOR} style={styles.arrowTopLeft} />
                                        <Txt fontWeight={600} fontSize={'xs'} fontColor={'secondary'}>{item.date}</Txt>
                                        {/* style={styles.patientCardDate} */}
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </Section>
            </ContainerView>
            <TouchableOpacity style={styles.PlusIconOverlay}>
                <FontAwesome5Icon name="plus" color={"#202C50"} size={ms(20, .25)}/>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        paddingHorizontal: ms(15, 0.25),
        paddingBottom: ms(25, 0.25),
        paddingTop: ms(10, 0.25),
    },
    patientListContainer: {
        paddingHorizontal: ms(7.5, 0.25),
    },
    patientCard: {
        flexDirection: 'row',
        flex: 1,
        marginHorizontal: ms(7.5, 0.25),
        marginBottom: ms(25, 0.25),
        justifyContent: 'space-between'
    },
    patientCardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    patientCardAvatarContainer: {
        height: ms(40, 0.25),
        width: ms(40, 0.25),
        borderRadius: ms(40, 0.25),
        overflow: 'hidden',
        marginRight: ms(10, 0.25),
        backgroundColor: COLOR_PALLETE.ACCENT_BACKGOUND_COLOR,
    },
    patientCardAvatar: {
        height: '100%',
        width: '100%',
    },
    patientName: {
        marginBottom: ms(5, 0.25),
    },
    patientCardRight: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    arrowTopLeft: {
        marginBottom: ms(5, 0.25),
    },
    PlusIconOverlay: {
        borderWidth: ms(1, .25),
        borderColor: "#63C7EC",
        backgroundColor: "#63C7EC",
        borderRadius: ms(16, .25),
        padding: ms(18, .25),
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 75,
        right: 15
    },
})
