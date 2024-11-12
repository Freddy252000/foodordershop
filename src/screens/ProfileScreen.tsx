import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import normalize from '../utils/utils';

const ProfileScreen = ({ navigation }: any) => {

    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />

            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Profile</Text>
            </View>

            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/app_images/avatar.png')}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Freddy Vincent</Text>
                <Text style={styles.profileEmail}>freddyvfreddy@gmail.com</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Editprofile')}>
                    <Text style={styles.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
        padding: normalize(15),
    },
    headerContainer: {
        paddingVertical: normalize(10),
        alignItems: 'center',
        borderBottomWidth: normalize(2),
        borderBottomColor: COLORS.primaryLightGreyHex,
    },
    headerTitle: {
        fontSize: normalize(15),
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_semibold,
    },
    profileContainer: {
        alignItems: 'center',
        marginVertical: normalize(15),
    },
    profileImage: {
        width: normalize(100),
        height: normalize(100),
        borderRadius: normalize(40),
        borderWidth: normalize(1),
        borderColor: COLORS.primaryLightGreyHex,
        marginBottom: normalize(15),
    },
    profileName: {
        fontSize: normalize(15),
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_medium,
        marginBottom: normalize(10),
    },
    profileEmail: {
        fontSize: normalize(10),
        color: COLORS.secondaryLightGreyHex,
        fontFamily: FONTFAMILY.poppins_regular,
    },
    buttonContainer: {
        marginTop: normalize(10),
        paddingHorizontal: normalize(15),
    },
    editButton: {
        backgroundColor: COLORS.primaryOrangeHex,
        borderRadius: normalize(10),
        paddingVertical: normalize(12),
        marginBottom: normalize(15),
        alignItems: 'center',
    },
    editButtonText: {
        fontSize: normalize(11),
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_medium,
    },
    logoutButton: {
        backgroundColor: COLORS.primaryGreyHex,
        borderRadius: normalize(10),
        paddingVertical: normalize(12),
        alignItems: 'center',
    },
    logoutButtonText: {
        fontSize: normalize(11),
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_medium,
    },
});

export default ProfileScreen;