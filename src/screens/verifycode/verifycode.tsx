import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, ImageBackground } from 'react-native';
import { COLORS, FONTFAMILY } from '../../theme/theme';
import normalize from '../../utils/utils';

const VerifyCode = ({ navigation }: any) => {
    const [code, setCode] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleVerifyCode = () => {
        if (!code) {
            setAlertMessage('Please enter the verification code');
            setModalVisible(true);
        } else {
            // setAlertMessage('Code verified successfully');
            // setModalVisible(true);
            setTimeout(() => {
                setModalVisible(false);
                navigation.navigate('resetpassword');
            }, 1500);
        }
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleResendCode = () => {
        setAlertMessage('Verification code resent');
        setModalVisible(true);
    };

    return (
        <ImageBackground
            source={require('../../assets/sliderimg/07.png')}
            style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Verify Code</Text>
                <Text style={styles.subtitle}>Enter the verification code sent to your email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Code"
                    placeholderTextColor="black"
                    keyboardType="numeric"
                    maxLength={6}
                    value={code}
                    onChangeText={setCode}
                />

                <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
                    <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleResendCode}>
                    <Text style={styles.resendText}>Resend Code</Text>
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
        fontSize: normalize(24),
        fontWeight: 'bold',
        color: COLORS.primaryBlackHex,
        marginBottom: normalize(10),
    },
    subtitle: {
        fontSize: normalize(14),
        color: COLORS.primaryDarkGreyHex,
        textAlign: 'center',
        marginBottom: normalize(20),
    },
    input: {
        width: '100%',
        paddingVertical: normalize(12),
        paddingHorizontal: normalize(15),
        borderRadius: normalize(10),
        backgroundColor: COLORS.secondaryLightGreyHex,
        color: COLORS.primaryBlackHex,
        fontSize: normalize(16),
        textAlign: 'center',
        marginBottom: normalize(15),
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
    resendText: {
        color: COLORS.primaryBlueHex,
        fontSize: normalize(14),
        fontFamily: FONTFAMILY.poppins_bold,
        marginTop: normalize(10),
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

export default VerifyCode;
