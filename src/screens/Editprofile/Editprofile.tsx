// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, ImageProps } from 'react-native';
// import { COLORS, FONTFAMILY, FONTSIZE } from '../../theme/theme';
// import normalize from '../../utils/utils';
// import GradientBGIcon from '../../components/GradientBGIcon';
// import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';

// const EditProfile = ({ navigation }: any) => {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [password, setPassword] = useState('');
//     const [isModalVisible, setModalVisible] = useState(false);
//     const [alertMessage, setAlertMessage] = useState('');

//     const handleSave = () => {
//         if (!name || !email || !phone || !password) {
//             setAlertMessage('Please fill in all fields');
//             setModalVisible(true);
//         } else {
//             setAlertMessage('Profile updated successfully');
//             setModalVisible(true);
//             setTimeout(() => {
//                 setModalVisible(false);
//                 navigation.goBack();
//             }, 1500);
//         }
//     };

//     return (
//         <LinearGradient
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             style={{
//                 flex: 1,
//                 paddingHorizontal: normalize(20),
//             }}
//             colors={[COLORS.primaryBlackHex, COLORS.primaryBlackHex]}>

//             <View style={styles.EditContainerWithBack}>
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('Profile')}>
//                     <GradientBGIcon
//                         name="left"
//                         color={COLORS.primaryLightGreyHex}
//                         size={FONTSIZE.size_16}
//                     />
//                 </TouchableOpacity>
//                 <Text style={styles.title}>Edit Profile</Text>
//             </View>

//             <View style={styles.container}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Full Name"
//                     placeholderTextColor="black"
//                     value={name}
//                     onChangeText={setName}
//                 />

//                 <TextInput
//                     style={styles.input}
//                     placeholder="Email"
//                     placeholderTextColor="black"
//                     keyboardType="email-address"
//                     value={email}
//                     onChangeText={setEmail}
//                 />

//                 <TextInput
//                     style={styles.input}
//                     placeholder="Phone Number"
//                     placeholderTextColor="black"
//                     keyboardType="phone-pad"
//                     value={phone}
//                     onChangeText={setPhone}
//                 />

//                 <TextInput
//                     style={styles.input}
//                     placeholder="Password"
//                     placeholderTextColor="black"
//                     secureTextEntry
//                     value={password}
//                     onChangeText={setPassword}
//                 />

//                 <TouchableOpacity style={styles.button} onPress={handleSave}>
//                     <Text style={styles.buttonText}>Conform</Text>
//                 </TouchableOpacity>

//                 <Modal
//                     transparent={true}
//                     visible={isModalVisible}
//                     animationType="fade"
//                     onRequestClose={() => setModalVisible(false)}
//                 >
//                     <View style={styles.modalBackdrop}>
//                         <View style={styles.modalContainer}>
//                             <Text style={styles.modalText}>{alertMessage}</Text>
//                             <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
//                                 <Text style={styles.modalButtonText}>OK</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </Modal>
//             </View>


//         </LinearGradient>

//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     EditContainerWithBack: {
//         flexDirection: 'row',
//         gap: normalize(50),
//         marginBottom: normalize(20),
//     },

//     title: {
//         fontSize: normalize(22),
//         color: COLORS.primaryWhiteHex,
//         fontWeight: 'bold',
//     },
//     input: {
//         width: '100%',
//         paddingVertical: normalize(14),
//         paddingHorizontal: normalize(10),
//         borderRadius: normalize(6),
//         backgroundColor: COLORS.primaryWhiteHex,
//         color: COLORS.primaryBlackHex,
//         fontSize: normalize(15),
//         fontWeight: '600',
//         marginBottom: normalize(16),
//     },
//     button: {
//         width: '100%',
//         backgroundColor: COLORS.primaryBlueHex,
//         paddingVertical: normalize(10),
//         borderRadius: normalize(6),
//         alignItems: 'center',
//         shadowColor: COLORS.primaryDarkGreyHex,
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.25,
//         shadowRadius: 5,
//         elevation: 5,
//     },
//     buttonText: {
//         color: COLORS.primaryWhiteHex,
//         fontSize: normalize(15),
//         fontFamily: FONTFAMILY.poppins_bold,
//     },
//     modalBackdrop: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalContainer: {
//         width: '80%',
//         backgroundColor: COLORS.primaryWhiteHex,
//         padding: normalize(20),
//         borderRadius: normalize(10),
//         alignItems: 'center',
//         shadowColor: COLORS.primaryGreyHex,
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.2,
//         shadowRadius: 6,
//         elevation: 10,
//     },
//     modalText: {
//         fontSize: normalize(16),
//         fontWeight: '600',
//         color: COLORS.primaryBlackHex,
//         marginBottom: normalize(15),
//     },
//     modalButton: {
//         backgroundColor: COLORS.primaryBlueHex,
//         paddingVertical: normalize(8),
//         paddingHorizontal: normalize(25),
//         borderRadius: normalize(8),
//     },
//     modalButtonText: {
//         color: COLORS.primaryWhiteHex,
//         fontSize: normalize(14),
//         fontFamily: FONTFAMILY.poppins_bold,
//     },
// });

// export default EditProfile;



import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Image, Alert } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../theme/theme';
import normalize from '../../utils/utils';
import GradientBGIcon from '../../components/GradientBGIcon';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';

const EditProfile = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [profileImage, setProfileImage] = useState<any>(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleSave = () => {
        if (!name || !email || !phone || !password) {
            setAlertMessage('Please fill in all fields');
            setModalVisible(true);
        } else {
            setAlertMessage('Profile updated successfully');
            setModalVisible(true);
            setTimeout(() => {
                setModalVisible(false);
                navigation.goBack();
            }, 1500);
        }
    };

    const handleImagePicker = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.assets && response.assets.length > 0) {
                setProfileImage(response.assets[0].uri);
            } else if (response.didCancel) {
                Alert.alert('Image selection canceled');
            } else {
                Alert.alert('Error', 'Something went wrong while selecting an image');
            }
        });
    };

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.screen}
            colors={[COLORS.primaryBlackHex, COLORS.primaryDarkGreyHex]}>
            <View style={styles.EditContainerWithBack}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <GradientBGIcon
                        name="left"
                        color={COLORS.primaryLightGreyHex}
                        size={FONTSIZE.size_16}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Edit Profile</Text>
            </View>

            <TouchableOpacity style={styles.profileImageContainer} onPress={handleImagePicker}>
                <Image
                    source={profileImage ? { uri: profileImage } : require('../../assets/app_images/emptyAvatar.png')}
                    style={styles.profileImage}
                />
                <Text style={styles.changePhotoText}>Change Photo</Text>
            </TouchableOpacity>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor="black"
                    value={name}
                    onChangeText={setName}
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
                    placeholder="Phone Number"
                    placeholderTextColor="black"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>

                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="fade"
                    onRequestClose={() => setModalVisible(false)}>
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
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: normalize(20),
    },
    EditContainerWithBack: {
        flexDirection: 'row',
        gap: normalize(50),
        marginBottom: normalize(20),
    },
    title: {
        fontSize: normalize(24),
        color: COLORS.primaryWhiteHex,
        fontWeight: 'bold',
    },
    profileImageContainer: {
        alignItems: 'center',
        marginBottom: normalize(20),
    },
    profileImage: {

        width: normalize(130),
        height: normalize(130),
        borderRadius: normalize(50),
        borderWidth: normalize(1),
        borderColor: COLORS.primaryLightGreyHex,
        marginBottom: normalize(10),

    },
    changePhotoText: {
        color: COLORS.primaryWhiteHex,
        fontSize: normalize(14),
        marginTop: normalize(10),
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        paddingVertical: normalize(12),
        paddingHorizontal: normalize(15),
        borderRadius: normalize(10),
        backgroundColor: '#D8D9DA',
        color: COLORS.primaryBlackHex,
        fontSize: normalize(16),
        fontWeight: '600',
        marginBottom: normalize(15),
    },
    button: {
        width: '100%',
        backgroundColor: COLORS.primaryDarkHex,
        paddingVertical: normalize(12),
        borderRadius: normalize(10),
        alignItems: 'center',
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

export default EditProfile;
