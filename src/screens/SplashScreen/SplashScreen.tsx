import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../theme/theme';
import normalize from '../../utils/utils';
import LinearGradient from 'react-native-linear-gradient';


const SplashScreen = ({ navigation }: any) => {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {

        setTimeout(() => {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.spring(scaleAnim, {
                    toValue: 0,
                    friction: 5,
                    tension: 50,
                    useNativeDriver: true,
                })
            ]).start(() => {
                navigation.replace('Slider');
            });
        }, 3000);
    }, [fadeAnim, scaleAnim, navigation]);

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}

                colors={[COLORS.primaryBlackHex, COLORS.primaryBlackHex]}>
                <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
                    <Image
                        source={require('../../assets/logo/Free_Logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.tagline}>Delicious meals, delivered fast!</Text>
                </Animated.View>
                <Animated.View style={[styles.loadingContainer, { opacity: fadeAnim }]}>
                    <Text style={styles.loadingText}>Loading...</Text>
                </Animated.View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: normalize(150),
        height: normalize(150),
        marginBottom: normalize(20),
    },
    tagline: {
        fontSize: normalize(15),
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_extralight,
    },
    loadingContainer: {
        position: 'absolute',
        bottom: normalize(40),
    },
    loadingText: {
        fontSize: normalize(15),
        color: COLORS.secondaryLightGreyHex,
        fontFamily: FONTFAMILY.poppins_regular,
    },
});

export default SplashScreen;
