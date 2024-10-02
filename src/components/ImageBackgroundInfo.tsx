import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageProps,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import GradientBGIcon from './GradientBGIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import normalize from '../utils/utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ImageBackgroundInfoProps {
  EnableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler?: any;
  ToggleFavourite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}) => {
  return (
    <View>
      <ImageBackground
        source={imagelink_portrait}
        style={styles.ItemBackgroundImage}>
        {EnableBackHandler ? (
          <View style={styles.ImageHeaderBarContainerWithBack}>
            <TouchableOpacity
              onPress={() => {
                BackHandler();
              }}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}>
              <GradientBGIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ImageHeaderBarContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}>
              <GradientBGIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerContainer}>
            <View style={styles.InfoContainerRow}>
              <View>
                <Text style={styles.ItemTitleText}>{name}</Text>
                <Text style={styles.ItemSubtitleText}>
                  {special_ingredient}
                </Text>
              </View>

              <View style={styles.ProperFirst}>
                <Ionicons name="restaurant" size={normalize(20)} color={COLORS.primaryOrangeHex} />
                <Text
                  style={
                    styles.PropertyTextFirst}>
                  {type}
                </Text>
              </View>
              <View style={styles.ProperFirst}>
                <Ionicons name="restaurant" size={normalize(20)} color={COLORS.primaryOrangeHex} />
                <Text style={styles.PropertyTextLast}>{ingredients}</Text>
              </View>

            </View>
            <View style={styles.InfoContainerRow}>
              <View style={styles.RatingContainer}>
                <CustomIcon
                  name={'star'}
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_20}
                />
                <Text style={styles.RatingText}>{average_rating}</Text>
                <Text style={styles.RatingCountText}>({ratings_count})</Text>
              </View>
              <View style={styles.RoastedContainer}>
                <Ionicons name="thumbs-up-sharp" size={normalize(20)} color={COLORS.primaryOrangeHex} />
                <Text style={styles.RoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 25 / 25,
    justifyContent: 'space-between',

  },
  ImageHeaderBarContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageHeaderBarContainerWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ImageInfoOuterContainer: {
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(20),
    backgroundColor: COLORS.secondaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
    opacity: 1
  },
  ImageInfoInnerContainer: {
    justifyContent: 'space-between',
  },
  InfoContainerRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ItemTitleText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: normalize(20),
    color: COLORS.primaryWhiteHex,
  },
  ItemSubtitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  ProperFirst: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: normalize(10)
  },

  PropertyTextFirst: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: normalize(10),
    marginTop: normalize(1),
    color: COLORS.primaryWhiteHex,
  },
  PropertyTextLast: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: normalize(10),
    color: COLORS.primaryWhiteHex,
  },
  RatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(5),
    marginTop: normalize(5)
  },
  RatingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: normalize(12),
    color: COLORS.primaryWhiteHex,
    marginTop: normalize(5)
  },
  RatingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: normalize(8),
    color: COLORS.primaryWhiteHex,
    marginTop: normalize(5)
  },
  RoastedContainer: {
    height: normalize(40),
    width: normalize(100),
    borderRadius: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
    flexDirection: 'row',
    gap: normalize(10),
    marginTop: normalize(10)
  },
  RoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: normalize(8),
    color: COLORS.primaryWhiteHex,
  },
});

export default ImageBackgroundInfo;
