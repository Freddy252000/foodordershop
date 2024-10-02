import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import OrderItemCard from './OrderItemCard';
import normalize from '../utils/utils';
interface OrderHistoryCardProps {
  navigationHandler: any;
  CartList: any;
  CartListPrice: string;
  OrderDate: string;
}
const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
  navigationHandler,
  CartList,
  CartListPrice,
  OrderDate,
}) => {
  return (
    <View style={styles.CardContainer}>
      <View style={styles.CardHeader}>
        <View>
          <Text style={styles.HeaderTitle}>Order Time</Text>
          <Text style={styles.HeaderSubtitle}>{OrderDate}</Text>
        </View>
        <View style={styles.PriceContainer}>
          <Text style={styles.HeaderTitle}>Total Amount</Text>
          <Text style={styles.HeaderPrice}>LKR {CartListPrice}</Text>
        </View>
      </View>
      <View style={styles.ListContainer}>
        {CartList.map((data: any, index: any) => (
          <OrderItemCard
            type={data.type}
            name={data.name}
            imagelink_square={data.imagelink_square}
            special_ingredient={data.special_ingredient}
            prices={data.prices}
            ItemPrice={data.ItemPrice}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    gap: normalize(15),
    backgroundColor: COLORS.secondaryBlackRGBA,
    width: '100%',
    padding: normalize(10),
    borderRadius: normalize(10),
    borderColor: COLORS.primaryWhiteHex,
    borderWidth: normalize(1)

  },
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: normalize(12),
    color: COLORS.primaryWhiteHex,
  },
  HeaderSubtitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: normalize(8),
    color: COLORS.primaryWhiteHex,
  },
  PriceContainer: {
    alignItems: 'flex-end',
  },
  HeaderPrice: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: normalize(13),
    color: COLORS.primaryOrangeHex,
  },
  ListContainer: {
    gap: normalize(20),
  },
});

export default OrderHistoryCard;
