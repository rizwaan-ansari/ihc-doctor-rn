import React, { useReducer, useRef } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import ContainerView from '../components/ContainerView'
import { IMG_KD_WATERMARK, IMG_REQUEST_SUCCESSFUL, IMG_WITHDRAWAL_SUCCESSFUL } from '../assets/images/index'
import { ms } from 'react-native-size-matters'
import FastImage from 'react-native-fast-image'
import FeatherIcon from 'react-native-vector-icons/Feather';
import Txt from '../components/UIComponent/Txt'
import { useTranslation } from 'react-i18next';
import { COLOR_PALLETE } from '../utils/ColorConstant'
import { Section } from '../components/Section'
import { Modalize } from 'react-native-modalize'
import Btn from '../components/UIComponent/Btn'

const PAYMENT = [
    {
        id: 1,
        title: 'Debited into your account',
        amount: '20KD',
        date: '12 March, 2020',
        withdrawal: false,
    },
    {
        id: 2,
        title: 'Debited into your account',
        amount: '20KD',
        date: '12 March, 2020',
        withdrawal: false,
    },
    {
        id: 3,
        title: 'Debited into your account',
        amount: '20KD',
        date: '12 March, 2020',
        withdrawal: false,
    },
    {
        id: 4,
        title: 'Debited into your account',
        amount: '-200KD',
        date: '12 March, 2020',
        withdrawal: true,
    },
    {
        id: 5,
        title: 'Debited into your account',
        amount: '20KD',
        date: '12 March, 2020',
        withdrawal: false,
    },
    {
        id: 6,
        title: 'Debited into your account',
        amount: '20KD',
        date: '12 March, 2020',
        withdrawal: false,
    },
    {
        id: 7,
        title: 'Debited into your account',
        amount: '20KD',
        date: '12 March, 2020',
        withdrawal: false,
    },
];

export default function WalletScreen() {
    const { t } = useTranslation(['doctor_home', 'common']);
    const [state, setState] = useReducer((state: any, newState: any) => ({ ...state, ...newState }), {
        text: null,
        payment: PAYMENT,
    });

    const withdrawalModalRef = useRef<Modalize>(null);
    const requestModalRef = useRef<Modalize>(null);
    const withdrawSuccessfulModalRef = useRef<Modalize>(null);

    const onOpenWithdrawal = () => {
        withdrawalModalRef.current?.open();
    };

    const onOpenRequest = () => {
        requestModalRef.current?.open();
    };

    const onOpenWithdrawSuccessful = () => {
        withdrawSuccessfulModalRef.current?.open();
    };

    const onCloseWithdrawSuccessful = () => {
        withdrawalModalRef.current?.close();
        requestModalRef.current?.close();
        withdrawSuccessfulModalRef.current?.close();
    };

    return (
        <>
            <ContainerView title={t("Payments")}>
                <Section unsetInnerSpacing removeMarginTop>
                    <View style={styles.withdrawalCardContainer}>
                        <View style={styles.withdrawalCard}>
                            <FastImage
                                style={styles.withdrawalCardWatermark}
                                source={IMG_KD_WATERMARK}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                            <View style={styles.withdrawalCardLeft}>
                                <Txt fontSize={'3xl'} fontWeight={900} fontColor={'white'} style={styles.walletBalance}>360 KD</Txt>
                                <Txt fontSize={'sm'} fontWeight={500} fontColor={'white-30'}>{t("Current balance")}</Txt>
                            </View>
                            <View style={styles.withdrawalCardRight}>
                                <TouchableOpacity style={styles.withdrawalBtn} onPress={onOpenWithdrawal}>
                                    <Txt fontSize={'sm'} fontColor={'white'}>{t("Request Withdrawal")}</Txt>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.walletListContainer}>
                        <Txt fontSize={'lg'} fontWeight={700} fontColor={'brand'} style={styles.sectionTitle}>{t("Payment History")}</Txt>
                        {state.payment.map((item: any) => {
                            return (
                                <View key={"transactions" + item.id.toString()} style={styles.walletRow}>
                                    <View style={styles.walletRowLeft}>
                                        <View style={[styles.walletRowAvatarContainer, { backgroundColor: item.withdrawal ? COLOR_PALLETE.SECONDARY_BRAND_FADED_COLOR_2 : COLOR_PALLETE.SECONDARY_BRAND_FADED_COLOR_1 }]}>
                                            <FeatherIcon name={item.withdrawal ? 'corner-right-up' : 'corner-right-down'} size={ms(26, 0.25)} color={item.withdrawal ? COLOR_PALLETE.SECONDARY_BRAND_COLOR_2 : COLOR_PALLETE.SECONDARY_BRAND_COLOR_1} />
                                        </View>
                                        <View>
                                            <Txt fontWeight={700} numberOfLines={1} fontColor={'brand'} style={styles.walletRowTitle}>{item.title}</Txt>
                                            <Txt fontColor={'secondary'} fontSize={'sm'}>{item.date}</Txt>
                                        </View>
                                    </View>
                                    <View style={styles.walletRowAmountContainer}>
                                        <Txt fontWeight={700} fontColor={'brand'} style={styles.walletRowAmount}>{item.amount}</Txt>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </Section>
            </ContainerView>
            <Modalize
                ref={withdrawalModalRef}
                adjustToContentHeight={true}
                modalStyle={styles.modalRoot}
            >
                <View style={[styles.modalContentContainer, styles.alignCenter]}>
                    <Txt fontSize={'xl'} fontWeight={700} style={styles.modalTitle}>
                        {t("Withdrawal request")}
                    </Txt>
                    <Txt fontSize={'sm'} fontColor={'secondary'} fontWeight={500} style={styles.modalDesc}>
                        Transfer your wallet money into your bank account.
                    </Txt>
                    <TextInput placeholder='50' placeholderTextColor={"#E2E2E2"} keyboardType='numeric' style={styles.AmountInput} />
                    <Btn title={t("SUBMIT REQUEST")} onPress={onOpenRequest} />
                </View>
            </Modalize>
            <Modalize
                ref={requestModalRef}
                adjustToContentHeight={true}
                modalStyle={styles.modalRoot}
            >
                <View style={[styles.modalContentContainer, styles.alignCenter]}>
                    <FastImage
                        style={styles.modalPaymentImage}
                        source={IMG_REQUEST_SUCCESSFUL}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <Txt fontSize={'xl'} fontWeight={700} style={styles.modalTitle}>
                        {t("Request successful")}
                    </Txt>
                    <Txt fontSize={'sm'} fontColor={'secondary'} fontWeight={500} style={styles.modalDesc}>
                        Withdrawal request has been placed, you will recieve the amount in your account once processed
                    </Txt>
                    <Btn title={t("OKAY")} onPress={onOpenWithdrawSuccessful} />
                </View>
            </Modalize>
            <Modalize
                ref={withdrawSuccessfulModalRef}
                adjustToContentHeight={true}
                modalStyle={styles.modalRoot}
            >
                <View style={[styles.modalContentContainer, styles.alignCenter]}>
                    <FastImage
                        style={styles.modalPaymentImage}
                        source={IMG_WITHDRAWAL_SUCCESSFUL}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <Txt fontSize={'xl'} fontWeight={700} style={styles.modalTitle}>
                        {t("Withdrawal successful")}
                    </Txt>
                    <Txt fontSize={'sm'} fontColor={'secondary'} fontWeight={500} style={styles.modalDesc}>
                        Withdrawal request has been processed, amount has been transferred in your linked account
                    </Txt>
                    <Btn title={t("OKAY")} onPress={onCloseWithdrawSuccessful} />
                </View>
            </Modalize>
        </>
    )
}

const styles = StyleSheet.create({
    withdrawalCardContainer: {
        paddingTop: ms(10, 0.25),
        paddingHorizontal: ms(15, 0.25),
        paddingBottom: ms(25, 0.25),
        flexDirection: 'row'
    },
    withdrawalCard: {
        flex: 1,
        height: ms(145, 0.25),
        backgroundColor: COLOR_PALLETE.SECONDARY_BRAND_COLOR_1,
        borderRadius: ms(15, 0.25),
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingLeft: ms(25, 0.25),
        // paddingRight: ms(20, 0.25),
        paddingTop: ms(25, 0.25),
        paddingBottom: ms(20, 0.25),
        position: 'relative'
    },
    withdrawalCardWatermark: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: ms(51, 0.25),
    },
    withdrawalCardLeft: {
        paddingHorizontal: ms(25, 0.25),
    },
    walletBalance: {
        marginBottom: ms(5, 0.25),
    },
    withdrawalCardRight: {
        justifyContent: 'flex-end',
        paddingHorizontal: ms(14, 0.250)
    },
    withdrawalBtn: {
        paddingHorizontal: ms(15, 0.25),
        height: ms(30, 0.25),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#00000040",
        borderRadius: ms(5, 0.25),
    },
    walletListContainer: {
        paddingHorizontal: ms(7.5, 0.25),
    },
    sectionTitle: {
        paddingHorizontal: ms(7.5, 0.25),
        marginBottom: ms(25, 0.25),
    },
    walletRow: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: ms(25, 0.25),
        marginHorizontal: ms(7.5, 0.25),
        justifyContent: 'space-between'
    },
    walletRowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: ms(7.5, 0.25),
    },
    walletRowAvatarContainer: {
        height: ms(50, 0.25),
        width: ms(50, 0.25),
        borderRadius: ms(10, 0.25),
        marginRight: ms(10, 0.25),
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_PALLETE.SECONDARY_BRAND_FADED_COLOR_1,
    },
    walletRowTitle: {
        marginBottom: ms(5, 0.25),
    },
    walletRowAmountContainer: {
        justifyContent: 'center',
        paddingHorizontal: ms(7., 0.255)
    },
    walletRowAmount: {
        marginBottom: ms(16, 0.25),
    },
    modalRoot: {
        backgroundColor: COLOR_PALLETE.WHITE_COLOR,
        paddingTop: ms(35, 0.25),
        paddingHorizontal: ms(15, 0.25),
        borderTopLeftRadius: ms(15, 0.25),
        borderTopRightRadius: ms(15, 0.25),
    },
    modalContentContainer: {
        flex: 1,
        // flexDirection: "column",
        paddingBottom: ms(25, 0.25),
    },
    alignCenter: {
        alignItems: 'center'
    },
    modalPaymentImage: {
        height: ms(100, 0.25),
        width: ms(134, 0.25),
        marginBottom: ms(16, 0.25),
    },
    modalTitle: {
        marginBottom: ms(10, 0.25),
        textAlign: 'center',
    },
    modalDesc: {
        textAlign: 'center',
        marginBottom: ms(25, 0.25),
        fontSize: ms(11.1, 0.25),
    },
    reviewModaldesc: {
        maxWidth: ms(240, 0.25),
        textAlign: 'center',
        marginBottom: ms(15, 0.25),
    },
    mb20: {
        marginBottom: ms(20, 0.25),
    },
    AmountInput: {
        backgroundColor: COLOR_PALLETE.GRAY_COLOR,
        borderWidth: ms(1, .25),
        borderColor: "#E2E2E2",
        borderRadius: ms(8, .25),
        marginBottom: ms(16, .25),
        width: "100%",
        paddingLeft: ms(36, .25),
        color: COLOR_PALLETE.PRIMARY_TEXT_COLOR
    }
})
