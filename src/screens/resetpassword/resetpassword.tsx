import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Modal, ImageBackground } from 'react-native';
import { COLORS, FONTFAMILY } from '../../theme/theme';
import normalize from '../../utils/utils';

const ResetPassword = ({ navigation }: any) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleResetPassword = () => {
        if (!newPassword || !confirmPassword) {
            setAlertMessage('Please fill in all fields');
            setModalVisible(true);
        } else if (newPassword !== confirmPassword) {
            setAlertMessage('Passwords do not match');
            setModalVisible(true);
        } else {
            setAlertMessage('Password reset successfully');
            setModalVisible(true);
            setTimeout(() => {
                setModalVisible(false);
                navigation.replace('Login');
            }, 1500);
        }
    };

    return (
        <ImageBackground
            source={require('../../assets/sliderimg/07.png')}
            style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Reset Your Password</Text>
                <Text style={styles.subtitle}>Please enter a new password below.</Text>

                <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    value={newPassword}
                    onChangeText={setNewPassword}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                    <Text style={styles.buttonText}>Reset Password</Text>
                </TouchableOpacity>

                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="fade"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalBackdrop}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalText}>{alertMessage}</Text>
                            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
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
        fontSize: normalize(22),
        color: COLORS.primaryBlackHex,
        fontWeight: 'bold',
        marginBottom: normalize(10),
    },
    subtitle: {
        fontSize: normalize(16),
        color: COLORS.primaryDarkGreyHex,
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
        marginBottom: normalize(15),
    },
    button: {
        width: '100%',
        backgroundColor: COLORS.primaryBlueHex,
        paddingVertical: normalize(12),
        borderRadius: normalize(10),
        alignItems: 'center',
        shadowColor: COLORS.primaryDarkGreyHex,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: COLORS.primaryWhiteHex,
        fontSize: normalize(16),
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
        shadowColor: COLORS.primaryGreyHex,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 10,
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
        borderRadius: normalize(10),
    },
    modalButtonText: {
        color: COLORS.primaryWhiteHex,
        fontSize: normalize(16),
        fontFamily: FONTFAMILY.poppins_bold,
    },
});

export default ResetPassword;
