import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { COLORS } from '../theme/theme';
import normalize from '../utils/utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfilePic = () => {
  return (
    <View style={styles.ImageContainer}>
      <Ionicons name="person" size={normalize(18)} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(10),
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default ProfilePic;
