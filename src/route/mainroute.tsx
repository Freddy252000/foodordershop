import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from '../screens/LoginPoints/Login'
import TabNavigator from '../navigators/TabNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import SliderScreen from '../screens/SliderScreen/SliderScreen';
import SelectScreen from '../screens/SelectScreen/SelectScreen';
import Register from '../screens/Registerpoint/Register';
import ForgotPassword from '../screens/forgot/forgotpassword';
import verifycode from '../screens/verifycode/verifycode';
import resetpassword from '../screens/resetpassword/resetpassword';
import EditProfile from '../screens/Editprofile/Editprofile';
const Stack = createNativeStackNavigator();
const mainroute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
                <Stack.Screen
                    name="Slider"
                    component={SliderScreen}
                    options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
                <Stack.Screen
                    name="SelectScreen"
                    component={SelectScreen}
                    options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
                <Stack.Screen
                    name="Login"
                    component={Loginscreen}
                    options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
                <Stack.Screen
                    name="forgot"
                    component={ForgotPassword}
                    options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
                <Stack.Screen
                    name="verify"
                    component={verifycode}
                    options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
                <Stack.Screen
                    name="resetpassword"
                    component={resetpassword}
                    options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
                <Stack.Screen
                    name="Tab"
                    component={TabNavigator}
                    options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
                <Stack.Screen
                    name="Editprofile"
                    component={EditProfile}
                    options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
                <Stack.Screen
                    name="Payment"
                    component={PaymentScreen}
                    options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default mainroute