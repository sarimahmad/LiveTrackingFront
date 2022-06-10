import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigationStrings from '../Constants/NavigationStrings';

import {
    Profile,
    Welcome,
    SignIn,
    SignUp,
    ForgotPassword,
    ChangePassword,
    Permissions,
    Camera
} from '../Screens';
import TabRoutes from './TabRoutes';



const Stack = createNativeStackNavigator();


export default function ScreensNav() {

    return (


        <NavigationContainer>

            <Stack.Navigator
                initialRouteName={NavigationStrings.WELCOME}
            // screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name={NavigationStrings.WELCOME} component={Welcome}  />
                <Stack.Screen name={NavigationStrings.SIGNIN} component={SignIn} />
                <Stack.Screen name={NavigationStrings.FORGOTPASSWORD} component={ForgotPassword} />
                <Stack.Screen name={NavigationStrings.CHANGEPASSWORD} component={ChangePassword} />
                <Stack.Screen name={NavigationStrings.SIGNUP} component={SignUp} />
                <Stack.Screen name={NavigationStrings.PERMISSIONS} component={Permissions} />
                <Stack.Screen name={NavigationStrings.HOME} component={TabRoutes} />
                <Stack.Screen name={NavigationStrings.PROFILE} component={Profile} />
                <Stack.Screen name={NavigationStrings.CAMERA} component={Camera} />
                
                
            </Stack.Navigator>

        </NavigationContainer>

    )
};