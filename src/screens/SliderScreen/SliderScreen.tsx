import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../theme/theme';
import normalize from '../../utils/utils';

const { width: screenWidth } = Dimensions.get('window');

const slides = [
    {
        title: 'Welcome to Food Delivery',
        description: 'Get your favorite meals delivered fast!',
        image: require('../../assets/sliderimg/04.png'),
    },
    {
        title: 'Track Your Orders',
        description: 'Real-time updates on your order status.',
        image: require('../../assets/sliderimg/051.png'),
    },
    {
        title: 'Earn Rewards',
        description: 'Get discounts and offers by using our app!',
        image: require('../../assets/sliderimg/021.png'),
    },
];

const SliderScreen = ({ navigation }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef<ScrollView>(null);

    const handleNextPress = () => {
        if (currentIndex < slides.length - 1) {
            scrollViewRef.current?.scrollTo({ x: screenWidth * (currentIndex + 1), animated: true });
        } else {
            navigation.replace('SelectScreen');
        }
    };

    const onScroll = (event: any) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
        setCurrentIndex(slideIndex);
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}

                colors={[COLORS.primaryBlackHex, COLORS.primaryBlackHex]}>
                <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                    onMomentumScrollEnd={onScroll}
                    scrollEventThrottle={16}
                >
                    {slides.map((slide, index) => (
                        <View key={index} style={styles.slide}>
                            <Image source={slide.image} style={styles.image} />
                            <Text style={styles.title}>{slide.title}</Text>
                            <Text style={styles.description}>{slide.description}</Text>
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                        <Text style={styles.buttonText}>
                            {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        padding: normalize(10),
    },
    image: {
        width: normalize(320),
        height: screenWidth * 1,
        resizeMode: 'contain',
        marginBottom: normalize(30),
    },
    title: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        color: COLORS.primaryWhiteHex,
        textAlign: 'center',
        marginBottom: normalize(5),
    },
    description: {
        fontSize: normalize(13),
        color: COLORS.primaryLightGreyHex,
        textAlign: 'center',
        marginBottom: normalize(20),
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: normalize(20),
        position: 'absolute',
        bottom: normalize(20),
        left: 0,
        right: 0,
    },
    button: {
        backgroundColor: '#ff6347',
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(20),
        borderRadius: normalize(10),
        width: normalize(250),
        alignItems: 'center'
    },
    buttonText: {
        color: COLORS.primaryWhiteHex,
        fontSize: normalize(14),
        fontWeight: 'bold',
    },
});

export default SliderScreen;
