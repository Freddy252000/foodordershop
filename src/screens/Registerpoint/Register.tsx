import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Modal,
    ImageBackground,
} from 'react-native';
import { COLORS, FONTFAMILY } from '../../theme/theme';
import normalize from '../../utils/utils';

const Register = ({ navigation }: any) => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleRegister = () => {
        if (!firstname || !lastname || !email || !password) {
            setAlertMessage('Please fill all fields');
            setModalVisible(true);
        } else {
            setAlertMessage('Registered successfully');
            setModalVisible(true);
            setTimeout(() => {
                navigation.replace('Login');
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
                <Text style={styles.title}>Create an Account</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        placeholderTextColor="black"
                        value={firstname}
                        onChangeText={setfirstname}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        placeholderTextColor="black"
                        value={lastname}
                        onChangeText={setlastname}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="black"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="black"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.registerLink}>Login</Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="fade"
                    onRequestClose={toggleModal}>
                    <View style={styles.modalBackdrop}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalText}>{alertMessage}</Text>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={toggleModal}>
                                <Text style={styles.modalButtonText}>Conform</Text>
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
        color: 'black',
        marginBottom: normalize(10),
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
    button: {
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
    buttonText: {
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
        fontSize: normalize(14),
        fontWeight: 'bold',
    },
    registerLink: {
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
        width: '90%',
        backgroundColor: 'rgba(200, 205, 210, 0.9)',
        padding: normalize(20),
        borderRadius: normalize(10),
        alignItems: 'center',
        shadowColor: COLORS.primaryGreyHex,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 10,
    },
    modalText: {
        marginBottom: normalize(20),
        fontSize: normalize(16),
        color: 'black',
        fontFamily: FONTFAMILY.poppins_bold,
    },
    modalButton: {
        backgroundColor: COLORS.primaryBlueHex,
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(20),
        width: '90%',
        height: normalize(45),
        borderRadius: normalize(10),
        alignItems: 'center',
        shadowColor: COLORS.primaryDarkGreyHex,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 8,
    },
    modalButtonText: {
        color: COLORS.primaryWhiteHex,
        fontSize: normalize(18),
        fontWeight: '500',
    },
});

export default Register;
