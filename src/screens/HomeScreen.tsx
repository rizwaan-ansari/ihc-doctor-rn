import * as React from 'react';
import { Dimensions, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel from "react-native-reanimated-carousel";
import { ms } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';
import ContainerView from '../components/ContainerView';
import PatientCard, { Status } from '../components/PatientCard';
import { Section } from '../components/Section';
import Txt from '../components/UIComponent/Txt';
import BOOKING_CARD from '../data/bookindCard';
import FOOTER_LINKS from '../data/footerLinks';
import MAINMENU from '../data/mainMenu';

const { width: deviceWidth } = Dimensions.get('window');

export default function AccountScreen(props: any) {
    const windowWidth = useWindowDimensions().width;
    const viewCount = 2;
    return (
        <ContainerView>
            <View>
                <Section title="Recent Appoinments" btnText="View All" style={{ padding: 0 }} unsetInnerSpacing={true}>
                    <View className='w-full relative -left-2 overflow-hidden pt-[14px] pl-4'>
                        <Carousel
                            width={windowWidth - 60}
                            height={200}
                            style={{ width: "100%", paddingTop: 20, overflow: "visible" }}
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
                            renderItem={({ item }) => (
                                <PatientCard
                                    key={`patientCard--${item.booking_id}`}
                                    status={item.status as Status}
                                    image={item.profile_pic}
                                    bookingId={item.booking_id}
                                    consultationFee={item.consultation_fee}
                                    timeslot={item.timeslot}
                                    date={item.date}
                                    onPress={() => { }}
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
                            data={MAINMENU}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    key={`mainMenu--${item.link}`}
                                    onPress={() => props.navigation.navigate(item.link)}>
                                    <View className='bg-[#F6F6F6] w-full rounded-lg pl-4 py-6 relative'>
                                        <FastImage source={item.image} className='w-4 h-4 mb-2' />
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
                        {FOOTER_LINKS.map((item, index) => (
                            <TouchableOpacity key={`footerLinks--${index}`}>
                                <View className='flex-row items-center mb-6'>
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
