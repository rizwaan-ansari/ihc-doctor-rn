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

const REVIEWS = [
    {
        id: 1,
        name: 'Charlotte Saunders',
        image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
        rating: 4,
        date: 'Nov 3',
        review: 'They can be a breath of fresh air when it comes to a drab afternoon. These are also a great way to jazz up a newsletter or a memo or even to simply print and attach to a bulletin board.'
    },
    {
        id: 2,
        name: 'Thomas Campbell',
        image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80',
        rating: 5,
        date: 'Nov 3',
        review: 'They can be a breath of fresh air when it comes to a drab afternoon. These are also a great way to jazz up a newsletter or a memo or even to simply print and attach to a bulletin board.'
    },
    {
        id: 3,
        name: 'alex holland',
        image: 'https://images.unsplash.com/photo-1557178180-7baf4e4e9735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        rating: 4,
        date: 'Nov 3',
        review: 'They can be a breath of fresh air when it comes to a drab afternoon. These are also a great way to jazz up a newsletter or a memo or even to simply print and attach to a bulletin board.'
    },
    {
        id: 4,
        name: 'Thomas Campbell',
        image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80',
        rating: 5,
        date: 'Nov 3',
        review: 'They can be a breath of fresh air when it comes to a drab afternoon. These are also a great way to jazz up a newsletter or a memo or even to simply print and attach to a bulletin board.'
    },
];
const FILTER = [
    {
        id: 0,
        filter: 'All',
    },
    {
        id: 5,
        filter: '5',
    },
    {
        id: 4,
        filter: '4',
    },
    {
        id: 3,
        filter: '3',
    },
    {
        id: 2,
        filter: '2',
    },
    {
        id: 1,
        filter: '1',
    },
];
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
