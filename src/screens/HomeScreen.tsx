import React, { useRef, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
  Modal,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import { FlatList } from 'react-native';
import CoffeeCard from '../components/CoffeeCard';
import { Dimensions } from 'react-native';
import normalize from '../utils/utils';
import Mealsdata from '../data/Mealsdata';
import MealsCard from '../components/MealsCard';
import Icon from 'react-native-vector-icons/Feather';
import CartItem from '../components/CartItem';
import CartInfo from '../components/cardinfo';
import { Actionsheet, Flex, useDisclose } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const getCategoriesFromData = (data: any) => {
  const temp: any = {};
  for (let i = 0; i < data.length; i++) {
    const categories = Object.keys(data[i].categories);
    for (const category of categories) {
      temp[category] = true;
    }
  }
  let categoriesArray = Object.keys(temp);
  categoriesArray.unshift('All');
  return categoriesArray;
};

const getMealList = (category: string, data: any) => {
  if (category === 'All') {
    return data.flatMap((item: { categories: { [s: string]: unknown; } | ArrayLike<unknown>; }) => Object.values(item.categories).flat()); // Flatten all meals
  } else {
    return data.flatMap((item: { categories: { [x: string]: any; }; }) => item.categories[category] || []); // Filter meals by selected category
  }
};

const HomeScreen = ({ navigation }: any) => {
  // const CoffeeList = useStore((state: any) => state.CoffeeList);

  const CartList = useStore((state: any) => state.CartList);
  console.log('car;', CartList);

  const MealList = useStore((state: any) => state.MealsList);
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const addToCart = useStore((state: any) => state.addToCart);

  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [categories, setCategories] = useState(
    getCategoriesFromData(MealList),
  );
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  // const [sortedCoffee, setSortedCoffee] = useState(
  //   getCoffeeList(categoryIndex.category, CoffeeList),
  // );

  const [sortedmeals, setSortedmeals] = useState(
    getMealList(categoryIndex.category, MealList),
  );

  const closeModal = () => {
    setModalVisible(false);
  };

  const { isOpen, onOpen, onClose } = useDisclose();

  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();

  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      // setCategoryIndex({ index: 0, category: categories[0] });
      // setSortedmeals([
      //   ...MealList.filter((item: any) =>
      //     item.name.toLowerCase().includes(search.toLowerCase()),
      //   ),
      // ]);

      setCategoryIndex({ index: 0, category: categories[0] });
      setSortedmeals([...MealList.flatMap(item => Object.values(item.categories).flat())
        .filter((meal: any) =>
          meal.name.toLowerCase().includes(search.toLowerCase()),
        )]);
    }
  };

  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    // setCategoryIndex({ index: 0, category: categories[0] });
    // setSortedmeals([...MealList]);
    // setSearchText('');

    setCategoryIndex({ index: 0, category: categories[0] });
    setSortedmeals(getMealList('All', MealList));
    setSearchText('');
  };

  const CoffeCardAddToCart = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: any) => {
    console.log({ id });

    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices,
    });
    calculateCartPrice();
    ToastAndroid.showWithGravity(
      `${name} is Added to Cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* App Header */}
        {/* <HeaderBar /> */}
        <View style={{
          padding: normalize(25),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <View style={{
            borderWidth: 2,
            borderColor: COLORS.secondaryDarkGreyHex,
            borderRadius: SPACING.space_12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.secondaryDarkGreyHex,
            overflow: 'hidden',
          }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
              style={{
                height: SPACING.space_36,
                width: SPACING.space_36,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* <CustomIcon name={name} color={color} size={size} /> */}
              <Image
                source={require('../assets/logo/Free_Logo.png')}
                style={{
                  width: '100%',
                  height: normalize(500),
                  resizeMode: 'center',

                }}
                resizeMode="contain"
              />
            </LinearGradient>
          </View>
        </View>

        <View style={styles.ScreenView}>
          <Text style={styles.ScreenTitle}>
            Find the best{'\n'}MEALS for you
          </Text>
          {CartList.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <View style={{ display: 'flex', flexDirection: 'column', rowGap: normalize(-10) }}>
                <View style={{
                  marginLeft: normalize(60),
                  height: normalize(18),
                  width: normalize(18),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: normalize(50),
                  borderWidth: 2,
                  borderColor: COLORS.primaryOrangeHex,
                  backgroundColor: COLORS.primaryRedHex
                }}>
                  <Text style={{
                    fontSize: normalize(10),
                    color: COLORS.primaryWhiteHex,
                  }}>{CartList.length}</Text>
                </View>

                <View style={{
                  marginLeft: normalize(40),
                  height: normalize(30),
                  width: normalize(30),
                  borderRadius: normalize(10),
                  borderWidth: 2,
                  borderColor: COLORS.primaryOrangeHex,
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  {/* <Icon name="plus" size={normalize(10)} color="white" style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }} /> */}
                  <CustomIcon
                    name="cart"
                    size={20}
                    color={COLORS.primaryOrangeHex}
                  />
                </View>
              </View>

            </TouchableOpacity>
          )}
        </View>

        {/* Search Input */}

        <View style={styles.InputContainerComponent}>
          <TouchableOpacity
            onPress={() => {
              searchCoffee(searchText);
            }}>
            <CustomIcon
              style={styles.InputIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Meals..."
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              searchCoffee(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchCoffee();
              }}>
              <CustomIcon
                style={styles.InputIcon}
                name="close"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        {/* Category Scroller */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}>
              <TouchableOpacity
                style={styles.CategoryScrollViewItem}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  // setCategoryIndex({ index: index, category: categories[index] });
                  // setSortedmeals([
                  //   ...getMealList(categories[index], MealList),
                  // ]);

                  setCategoryIndex({ index, category: categories[index] });
                  setSortedmeals(getMealList(categories[index], MealList));
                }}>
                <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index == index
                      ? { color: COLORS.primaryOrangeHex }
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.ActiveCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Meal Flatlist */}

        <FlatList
          ref={ListRef}
          horizontal
          ListEmptyComponent={
            <View style={styles.EmptyListContainer}>
              <Text style={styles.CategoryText}>No Meals Available</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedmeals}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <MealsCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[0]}
                  buttonPressHandler={CoffeCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />

        <Text style={styles.CoffeeBeansTitle}>Shorteats</Text>

        {/* Shorteats Flatlist */}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeanList}
          contentContainerStyle={[
            styles.FlatListContainer,
            { marginBottom: normalize(10) },
          ]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {

            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={CoffeCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />

        <Text style={styles.CoffeeBeansTitle02}>Coffee</Text>
        {/* Coffee list */}

        <FlatList
          ref={ListRef}
          horizontal
          ListEmptyComponent={
            <View style={styles.EmptyListContainer}>
              <Text style={styles.CategoryText}>No Coffee Available</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={CoffeeList}
          contentContainerStyle={[
            styles.FlatListContainer,
            { marginBottom: tabBarHeight },
          ]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={CoffeCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />

      </ScrollView>
      <Actionsheet isOpen={modalVisible} onClose={closeModal}>
        <Actionsheet.Content style={{
          backgroundColor: COLORS.primaryDarkGreyHex,
        }}>
          <ScrollView
            style={{
              backgroundColor: 'transparent',
              flexGrow: 1,
            }}
          >
            <View style={styles.modalContent}>
              <View style={{
                padding: normalize(20),
                alignItems: 'center'
              }}>
                <Text style={{
                  fontFamily: FONTFAMILY.poppins_semibold,
                  fontSize: normalize(15),
                  color: COLORS.primaryWhiteHex,
                }}>Cart Info</Text>
              </View>
              <View style={{
                paddingHorizontal: normalize(20),
                gap: normalize(10),
                marginBottom: normalize(20)
              }}>
                {CartList.map((data: any) => (
                  <CartInfo
                    id={data.id}
                    name={data.name}
                    imagelink_square={data.imagelink_square}
                    special_ingredient={data.special_ingredient}
                    roasted={data.roasted}
                    prices={data.prices}
                    type={data.type}
                    incrementCartItemQuantityHandler={undefined}
                    decrementCartItemQuantityHandler={undefined}                      // incrementCartItemQuantityHandler={
                  />
                ))
                }
              </View>
            </View>


          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>

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
  },
  ScreenView: {
    flexDirection: 'row',
    paddingLeft: normalize(25),
  },
  ScreenTitle: {
    fontSize: normalize(25),
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
  },
  backdrop: {

    justifyContent: 'center',
    alignItems: 'center',


  },
  modalContent: {
    width: normalize(280),
    backgroundColor: COLORS.primaryBlackHex,
    borderRadius: normalize(20),
    // alignItems: 'center',
    borderColor: 'white',
    borderWidth: normalize(1)
  },
  modalText: {
    fontSize: 18,
    marginBottom: normalize(10),
  },

  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  EmptyListContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3.6,
  },
  CoffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  CoffeeBeansTitle02: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
});

export default HomeScreen;
