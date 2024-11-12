import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { COLORS, FONTFAMILY } from '../../theme/theme';
import normalize from '../../utils/utils';

const Login = ({ navigation }: any) => {
    return (
        <ImageBackground
            source={require('../../assets/sliderimg/07.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Back!</Text>
                <Text style={styles.subtitle}>Sign in to continue</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="black"
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="black"
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('forgot')} style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Tab')} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerLink}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        backgroundColor: 'rgba(200, 205, 210, 0.6)',
        padding: normalize(20),
        borderRadius: normalize(15),
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 10,
    },
    title: {
        fontSize: normalize(24),
        color: 'black',
        marginBottom: normalize(10),
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: normalize(14),
        color: COLORS.primaryDarkGreyHex,
        marginBottom: normalize(20),
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '100%',
        marginBottom: normalize(10),
    },
    input: {
        width: '100%',
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(10),
        borderRadius: normalize(10),
        backgroundColor: COLORS.secondaryLightGreyHex,
        color: COLORS.primaryBlackHex,
        fontWeight: '700',
        fontSize: normalize(14),
        marginBottom: normalize(15),
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
    },
    forgotPasswordText: {
        color: COLORS.primaryBlueHex,
        fontSize: normalize(12),
        fontWeight: 'bold',
        marginBottom: normalize(5),
    },
    loginButton: {
        width: '100%',
        backgroundColor: COLORS.primaryOrangeHex,
        paddingVertical: normalize(12),
        borderRadius: normalize(20),
        alignItems: 'center',
        shadowColor: COLORS.primaryDarkGreyHex,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 8,
    },
    loginButtonText: {
        color: COLORS.primaryWhiteHex,
        fontSize: normalize(16),
        fontFamily: FONTFAMILY.poppins_bold,
    },
    registerContainer: {
        flexDirection: 'row',
        marginTop: normalize(20),
    },
    registerText: {
        color: COLORS.primaryDarkGreyHex,
        // fontSize: normalize(14),
        fontSize: normalize(14),
        fontWeight: 'bold',
    },
    registerLink: {
        color: COLORS.primaryBlueHex,
        fontSize: normalize(14),
        fontFamily: FONTFAMILY.poppins_bold,
    },
});

export default Login;
