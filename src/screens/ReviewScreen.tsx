import React, { useReducer } from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ms } from 'react-native-size-matters';
import ContainerView from '../components/ContainerView'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ReviewCard from '../components/ReviewCard';
import RatingCard from '../components/RatingCard';
import Txt from '../components/UIComponent/Txt';
import { useTranslation } from 'react-i18next';
import { COLOR_PALLETE } from '../utils/ColorConstant';
import { Section } from '../components/Section';
import { FILTER, REVIEWS } from '../data/reviews';


export default function ReviewScreen() {
    const { t } = useTranslation(['doctor_home', 'common']);
    const [state, setState] = useReducer((state: any, newState: any) => ({ ...state, ...newState }), {
        reviews: REVIEWS,
        selectedFilterId: 0,
    });
    const renderFilterPills = ({ item }: { item: { id: number; filter: string; } }) => {
        return (
            <TouchableOpacity
                onPress={() => setState({ selectedFilterId: item.id })}
                style={[styles.filterPillContainer, { backgroundColor: item.id === state.selectedFilterId ? COLOR_PALLETE.BRAND_LIGHT_COLOR : COLOR_PALLETE.ACCENT_BACKGOUND_COLOR }]}
            >
                {item.id === 0 ?
                    null
                    :
                    <FontAwesomeIcon
                        name={'star'}
                        size={ms(13, 0.25)}
                        color={item.id === state.selectedFilterId ? COLOR_PALLETE.BRAND_COLOR : COLOR_PALLETE.SECONDARY_TEXT_COLOR}
                        style={styles.star}
                    />
                }
                <Txt fontWeight={500} fontSize={'sm'} style={{ color: item.id === state.selectedFilterId ? COLOR_PALLETE.BRAND_COLOR : COLOR_PALLETE.SECONDARY_TEXT_COLOR }}>{item.filter}</Txt>
            </TouchableOpacity>
        )
    }
    return (
        <ContainerView title={t("Reviews")}>
            <Section removeMarginTop unsetInnerSpacing>
                <View style={styles.ratingsCardContainer}>
                    <RatingCard
                        ratingNumber={'4.8'}
                        stars={'5'}
                        halfStar={'true'}
                        totalRatings={'150'}
                    />
                </View>
                <FlatList
                    contentContainerStyle={styles.filterFlatlist}
                    horizontal={true}
                    data={FILTER}
                    renderItem={renderFilterPills}
                    keyExtractor={item => `filter-${item.id}`}
                />
                <View style={styles.reviewCardContainer}>
                    {state.reviews.map((data: any) => {
                        return (
                            <ReviewCard
                                key={"reviews" + data.id.toString()}
                                image={data.image}
                                name={data.name}
                                rating={data.rating}
                                date={data.date}
                                review={data.review}
                            />
                        );
                    })}
                </View>
            </Section>
        </ContainerView>
    )
}

const styles = StyleSheet.create({
    reviewCardContainer: {
        paddingHorizontal: ms(7.5, 0.25),
    },
    ratingsCardContainer: {
        paddingTop: ms(10, 0.25),
        paddingBottom: ms(10, 0.25),
    },
    filterFlatlist: {
        paddingBottom: ms(15, 0.25),
        paddingHorizontal: ms(15, 0.25),
    },
    filterPillContainer: {
        paddingHorizontal: ms(25, 0.25),
        flexDirection: 'row',
        paddingVertical: ms(9, 0.25),
        borderRadius: ms(8, 0.25),
        marginRight: ms(10, 0.25),
        minWidth: ms(70, 0.25),
        justifyContent: 'center'
    },
    star: {
        marginRight: ms(3, 0.25),
    }
})
