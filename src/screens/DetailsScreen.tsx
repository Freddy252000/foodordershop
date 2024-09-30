import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { useStore } from '../store/store';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';
import PaymentFooter from '../components/PaymentFooter';
import normalize from '../utils/utils';

const DetailsScreen = ({ navigation, route }: any) => {
  // const ItemOfIndex = useStore((state: any) =>
  //   route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  // )[route.params.index];
  const [ItemOfIndex, setItemOfIndex] = useState(true);
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const MealsList = useStore((state: any) => state.MealsList);
  const BeanList = useStore((state: any) => state.BeanList);
  const [loading, setLoading] = useState(true);
  console.log('route:----', route.params);


  useEffect(() => {
    const mealCategories: Record<string, string> = {
      B1: 'Biriyanis',
      B2: 'Biriyanis',
      B3: 'Biriyanis',
      B4: 'Biriyanis',
      NA1: 'Naans',
      NA2: 'Naans',
      NA3: 'Naans',
      K1: 'Kottu',
      K2: 'Kottu',
      K3: 'Kottu',
      K4: 'Kottu',
      S1: 'Soups',
      S2: 'Soups',
      S3: 'Soups',
      S4: 'Soups',
      N1: 'Noodles',
      N2: 'Noodles',
      N3: 'Noodles',
      N4: 'Noodles',
      F1: 'FriedRice',
      F2: 'FriedRice',
      F3: 'FriedRice',
      F4: 'FriedRice',
      RC1: 'RiceandCurry',
      RC2: 'RiceandCurry',
      RC3: 'RiceandCurry',
      RC4: 'RiceandCurry'
    };

    let selectedData;

    if (route.params.type === 'Coffee') {
      selectedData = CoffeeList[route.params.index];
    } else if (route.params.type === 'Meal' && mealCategories[route.params.id]) {
      const selectedCategory = mealCategories[route.params.id];
      console.log('selectedCategory:---', selectedCategory);
      console.log('MealsList[0].categories[selectedCategory]:---', MealsList[0].categories[selectedCategory]);
      // selectedData = MealsList[0].categories[selectedCategory][route.params.id];
      selectedData = MealsList[0].categories[selectedCategory].find(
        (meal) => meal.id === route.params.id
      );
    } else {
      selectedData = BeanList[route.params.index];
    }
    console.log({ selectedData });

    setItemOfIndex(selectedData);

  }, [route.params, CoffeeList, MealsList, BeanList]);



  //   if (route.params.type === 'Coffee') {
  //     return state.CoffeeList;
  //   }

  //   if (route.params.type === 'Meal' && mealCategories[route.params.id]) {
  //     const selectedCategory = mealCategories[route.params.id];
  //     console.log('state.MealsList[0].categories[selectedCategory]:---', state.MealsList[0].categories[selectedCategory]);
  //     return state.MealsList[0].categories[selectedCategory];
  //   }

  //   return state.BeanList;
  // })[route.params.index];


  // const ItemOfIndex = useStore((state: any) => {
  //   const mealCategories: Record<string, string> = {
  //     B1: 'Biriyanis',
  //     B2: 'Biriyanis',
  //     B3: 'Biriyanis',
  //     B4: 'Biriyanis',
  //     NA1: 'Naans',
  //     NA2: 'Naans',
  //     NA3: 'Naans',
  //     K1: 'Kottu',
  //     K2: 'Kottu',
  //     K3: 'Kottu',
  //     K4: 'Kottu',
  //     S1: 'Soups',
  //     S2: 'Soups',
  //     S3: 'Soups',
  //     S4: 'Soups',
  //     N1: 'Noodles',
  //     N2: 'Noodles',
  //     N3: 'Noodles',
  //     N4: 'Noodles',
  //     F1: 'FriedRice',
  //     F2: 'FriedRice',
  //     F3: 'FriedRice',
  //     F4: 'FriedRice',
  //     RC1: 'RiceandCurry',
  //     RC2: 'RiceandCurry',
  //     RC3: 'RiceandCurry',
  //     RC4: 'RiceandCurry'
  //   };

  //   if (route.params.type === 'Coffee') {
  //     return state.CoffeeList;
  //   }

  //   if (route.params.type === 'Meal' && mealCategories[route.params.id]) {
  //     const selectedCategory = mealCategories[route.params.id];
  //     console.log('state.MealsList[0].categories[selectedCategory]:---', state.MealsList[0].categories[selectedCategory]);
  //     return state.MealsList[0].categories[selectedCategory];
  //   }

  //   return state.BeanList;
  // })[route.params.index];
  // console.log('ItemOfIndex:', ItemOfIndex);
  // useEffect(() => {
  //   if (ItemOfIndex) {
  //     console.log('ItemOfIndex:', ItemOfIndex);
  //     setLoading(false);
  //   } else {
  //     console.log('ItemOfIndex is undefined or empty');
  //     setLoading(true);
  //   }
  // }, [route.params.id]);

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [price, setPrice] = useState(ItemOfIndex?.prices?.[0] ?? null);
  const [fullDesc, setFullDesc] = useState(false);

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  const BackHandler = () => {
    navigation.pop();
  };

  const addToCarthandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{ ...price, quantity: 1 }],
    });
    calculateCartPrice();
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={ItemOfIndex?.imagelink_portrait}
          type={ItemOfIndex?.type}
          id={ItemOfIndex?.id}
          favourite={ItemOfIndex?.favourite}
          name={ItemOfIndex?.name}
          special_ingredient={ItemOfIndex?.special_ingredient}
          ingredients={ItemOfIndex?.ingredients}
          average_rating={ItemOfIndex?.average_rating}
          ratings_count={ItemOfIndex?.ratings_count}
          roasted={ItemOfIndex?.roasted}
          BackHandler={BackHandler}
          ToggleFavourite={ToggleFavourite}
        />

        <View style={styles.FooterInfoArea}>
          <Text style={styles.InfoTitle}>Description</Text>
          {fullDesc ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <Text style={styles.DescriptionText}>
                {ItemOfIndex.description}
              </Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <Text numberOfLines={3} style={styles.DescriptionText}>
                {ItemOfIndex?.description}
              </Text>
            </TouchableWithoutFeedback>
          )}
          <Text style={styles.InfoTitle}>Size</Text>
          <View style={styles.SizeOuterContainer}>
            {ItemOfIndex?.prices?.map((data: any) => (
              <TouchableOpacity
                key={data.size}
                onPress={() => {
                  setPrice(data);
                }}
                style={[
                  styles.SizeBox,
                  {
                    borderColor:
                      data.size == price?.size
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryDarkGreyHex,
                  },
                ]}>
                <Text
                  style={[
                    styles.SizeText,
                    {
                      fontSize:
                        ItemOfIndex.type == 'Shorteats'
                          ? FONTSIZE.size_14
                          : FONTSIZE.size_16,
                      color:
                        data.size == price?.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.secondaryLightGreyHex,
                    },
                  ]}>
                  {data.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <PaymentFooter
          price={price}
          buttonTitle="Add to Cart"
          buttonPressHandler={() => {
            addToCarthandler({
              id: ItemOfIndex.id,
              index: ItemOfIndex.index,
              name: ItemOfIndex.name,
              roasted: ItemOfIndex.roasted,
              imagelink_square: ItemOfIndex.imagelink_square,
              special_ingredient: ItemOfIndex.special_ingredient,
              type: ItemOfIndex.type,
              price: price,
            });
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  FooterInfoArea: {
    padding: normalize(20),
  },
  InfoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,
  },
  DescriptionText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
  },
  SizeOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
  },
  SizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});

export default DetailsScreen;
