import { StyleSheet, Text, View, ImageProps, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import normalize from '../utils/utils';

interface OrderItemCardProps {
  type: string;
  name: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  prices: any;
  ItemPrice: string;
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({
  type,
  name,
  imagelink_square,
  special_ingredient,
  prices,
  ItemPrice,
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.CardLinearGradient}>
      <View style={styles.CardInfoContainer}>
        <View style={styles.CardImageInfoContainer}>
          <Image source={imagelink_square} style={styles.Image} />
          <View>
            <Text style={styles.CardTitle}>{name}</Text>
            <Text style={styles.CardSubtitle}>{special_ingredient}</Text>
            {prices.map((data: any, index: any) => (
              <View key={index.toString()} style={styles.CardTableRow}>
                <View style={styles.CartItemSizeValueContainer}>
                  <View style={{ marginRight: normalize(10) }}>
                    <Text style={styles.CardQuantityPriceText}>
                      <Text style={styles.Price}> Qty:{data.quantity}</Text>
                    </Text>
                  </View>

                  <View style={styles.SizeBox}>
                    <Text
                      style={[
                        styles.SizeText,
                        {
                          fontSize:
                            type == 'Shorteats' ? normalize(10) : normalize(10),
                        },
                      ]}>
                      {data.size}
                    </Text>
                  </View>
                </View>
                <Text style={styles.SizeCurrency}>
                  {data.currency}
                  <Text style={styles.SizePrice}> {data.price}</Text>
                </Text>
              </View>

            ))}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  CardLinearGradient: {
    // gap: normalize(30),
    // padding: normalize(5),
    borderRadius: normalize(20),
  },
  CartItemSizeValueContainer: {
    // alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  SizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: normalize(20),
    width: normalize(70),
    borderRadius: normalize(10),
    marginLeft: normalize(20)
  },
  SizeText: {
    color: COLORS.secondaryLightGreyHex,
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: normalize(12),
    margin: normalize(1)

  },
  SizeCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: normalize(12),
    marginLeft: normalize(8),
    marginRight: normalize(22),
    color: COLORS.primaryOrangeHex,
  },
  SizePrice: {
    color: COLORS.primaryWhiteHex,
  },
  CardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CardImageInfoContainer: {
    flexDirection: 'row',
    gap: normalize(5),
    alignItems: 'center',
  },
  Image: {
    height: normalize(130),
    width: normalize(100),
    borderRadius: normalize(15),
  },
  CardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: normalize(12),
    color: COLORS.primaryWhiteHex,
  },
  CardSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: normalize(8),
    color: COLORS.secondaryLightGreyHex,
  },
  CardTableRow: {
    flexDirection: 'column',
  },
  Price: {
    color: COLORS.primaryWhiteHex,
    fontSize: normalize(12),
    fontFamily: FONTFAMILY.poppins_medium,

  },
  CardQuantityPriceText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: normalize(12),
    color: COLORS.primaryWhiteHex,
    marginBottom: normalize(10)
  },
});

export default OrderItemCard;
