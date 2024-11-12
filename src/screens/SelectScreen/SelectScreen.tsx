import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import normalize from '../../utils/utils';
import { COLORS } from '../../theme/theme';

const SelectScreen = ({ navigation }: any) => {
    return (
        <ImageBackground
            source={require('../../assets/sliderimg/07.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>Select an Option</Text>

                {/* Register Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity
                    style={[styles.button, styles.loginButton]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
    },
    title: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: normalize(20),
    },
    button: {
        width: '80%',
        backgroundColor: 'rgba(255, 99, 71, 0.7)',
        paddingVertical: normalize(12),
        borderRadius: normalize(20),
        alignItems: 'center',
        marginVertical: normalize(8),
        opacity: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 8,
    },
    loginButton: {
        backgroundColor: 'rgba(3, 52, 110, 0.7)',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SelectScreen;
