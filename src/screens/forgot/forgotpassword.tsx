import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Alert, ImageBackground } from 'react-native';
import { COLORS, FONTFAMILY } from '../../theme/theme';
import normalize from '../../utils/utils';

const ForgotPassword = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleForgotPassword = () => {
        if (!email) {
            setAlertMessage('Please enter your email address');
            setModalVisible(true);
        } else {
            // setAlertMessage('A reset link has been sent to your email');
            // setModalVisible(true);
            setTimeout(() => {
                setModalVisible(false);
                navigation.navigate('verify');
            }, 1500);
        }
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <ImageBackground
            source={require('../../assets/sliderimg/07.png')}
            style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.subtitle}>
                    Enter your registered email to receive a password reset link
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
                    <Text style={styles.buttonText}>Send Reset Link</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.backToLogin}>Back to Login</Text>
                </TouchableOpacity>

                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="fade"
                    onRequestClose={toggleModal}
                >
                    <View style={styles.modalBackdrop}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalText}>{alertMessage}</Text>
                            <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
                                <Text style={styles.modalButtonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: COLORS.primaryBlackHex,
        marginBottom: normalize(10),
    },
    subtitle: {
        fontSize: normalize(13),
        color: COLORS.primaryBlackHex,
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: normalize(20),
    },
    input: {
        width: '100%',
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(10),
        borderRadius: normalize(10),
        backgroundColor: COLORS.secondaryLightGreyHex,
        color: COLORS.primaryBlackHex,
        fontSize: normalize(13),
        marginBottom: normalize(14),
    },
    button: {
        width: '100%',
        backgroundColor: COLORS.primaryOrangeHex,
        paddingVertical: normalize(12),
        borderRadius: normalize(20),
        alignItems: 'center',
        marginBottom: normalize(15),
    },
    buttonText: {
        color: COLORS.primaryWhiteHex,
        fontSize: normalize(16),
        fontFamily: FONTFAMILY.poppins_bold,
    },
    backToLogin: {
        color: COLORS.primaryBlueHex,
        fontSize: normalize(14),
        fontFamily: FONTFAMILY.poppins_bold,
    },
    modalBackdrop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: COLORS.primaryWhiteHex,
        padding: normalize(20),
        borderRadius: normalize(10),
        alignItems: 'center',
    },
    modalText: {
        fontSize: normalize(16),
        color: COLORS.primaryBlackHex,
        marginBottom: normalize(20),
    },
    modalButton: {
        backgroundColor: COLORS.primaryBlueHex,
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(25),
        borderRadius: normalize(20),
    },
    modalButtonText: {
        color: COLORS.primaryWhiteHex,
        fontSize: normalize(16),
    },
});

export default ForgotPassword;
