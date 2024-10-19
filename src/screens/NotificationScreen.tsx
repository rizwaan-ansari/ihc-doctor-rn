import React, { useReducer, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { ms } from 'react-native-size-matters';
import ContainerView from '../components/ContainerView'
import { IMG_EMPTY_ICON } from '../assets/images/index'
import Txt from '../components/UIComponent/Txt';
import EmptyBlock from '../components/EmptyBlock';
import { COLOR_PALLETE } from '../utils/ColorConstant';
import { useTranslation } from 'react-i18next';
import { Section } from '../components/Section';

const API_END_POINT = 'https://615401b72473940017efab2a.mockapi.io/ihc';

export default function NotificationScreen() {
    const { t } = useTranslation('account');
    const [state, setState] = useReducer((state: any, newState: any) => ({ ...state, ...newState }), {
        loading: true,
        empty: false,
        notifications: [],
    });
    const fetchRequest = () => {
        fetch(API_END_POINT + '/notificatin').then(res => res.json()).then((notificationResponse) => {
            setState({
                notifications: notificationResponse,
                loading: false,
            });
        });
    }
    useEffect(() => {
        fetchRequest();
    }, []);
    if (true === state.loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
            </View>
        )
    }
    return (
        <ContainerView title={t("Notifications")} staticView={state.empty ? true : false} bodyStyle={[state.empty && { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
            <Section unsetInnerSpacing removeMarginTop>
                {state.empty ?
                    <EmptyBlock
                        title={t("Notifications")}
                        subtitle={t("You have no notifications as of now please check back later")}
                        image={IMG_EMPTY_ICON}
                        imageStyle={{ marginRight: ms(15, 0.25) }}
                    />
                    :
                    <View style={styles.notificationSection}>
                        {state.notifications.map((item: any) => {
                            return (
                                <View key={"notification" + item.id.toString()} style={styles.notificationCard}>
                                    <Txt fontColor={'secondary'} fontSize={'sm'} fontWeight={600}>{item.title}</Txt>
                                    <Txt fontWeight={500} style={styles.notificationText}>{item.message}</Txt>
                                    <Txt fontSize={'sm'} fontColor={'secondary'}>{item.date}</Txt>
                                </View>
                            );
                        })}
                    </View>
                }
            </Section>
        </ContainerView>
    )
}

const styles = StyleSheet.create({
    emptyScrenBlock: {
        marginBottom: ms(100, 0.25),
        alignItems: 'center',
        maxWidth: ms(220, 0.25),
        textAlign: 'center',
    },
    emptyTitle: {
        textAlign: 'center',
        marginBottom: ms(15, 0.25)
    },
    emptySubtitle: {
        textAlign: 'center',
    },
    emptyScreenIcon: {
        height: ms(85, 0.25),
        width: ms(85, 0.25),
        marginBottom: ms(15, 0.25)
    },
    notificationSection: {
        paddingTop: ms(10, 0.25),
        paddingHorizontal: ms(7.5, 0.25),
        paddingBottom: ms(15, 0.25), //temporary padding
    },
    notificationCard: {
        flex: 1,
        height: ms(105, 0.25),
        paddingHorizontal: ms(15, 0.25),
        marginHorizontal: ms(7.5, 0.25),
        borderRadius: ms(10, 0.25),
        backgroundColor: COLOR_PALLETE.ACCENT_BACKGOUND_COLOR,
        justifyContent: 'center',
        marginBottom: ms(15, 0.25)
    },
    notificationText: {
        marginTop: ms(10, 0.25),
        marginBottom: ms(8, 0.25),
    },
})
