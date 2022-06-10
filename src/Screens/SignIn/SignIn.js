
import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import NavigationStrings from '../../Constants/NavigationStrings';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';
import {LoginForm} from '../../helper/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignIn = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const  onSignInScreenPressed = async () => {
        let data ={
            email: email,
            password: password,
        }
      await LoginForm(data).then(response=>{
          console.log(response);
            if(response.status===200){
                console.log(response.data.user);
                AsyncStorage.setItem("profile",JSON.stringify(response.data.user))
                navigation.navigate(NavigationStrings.PERMISSIONS)
            }else{
                alert('incorrect email or password')
            }
        });
        
    };

    const onForgotPasswordPressed = () => {
      //  console.warn('onForgotPasswordPressed');

        navigation.navigate(NavigationStrings.FORGOTPASSWORD)
    };

    const onSignUpScreenPressed = () => {
     //   console.warn('onSignUpScreenPressed');

        navigation.navigate(NavigationStrings.SIGNUP)
    };


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <Text style={{
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    fontSize: 30,
                    paddingBottom: 40
                }}>

                    User's Login
                </Text>

                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomButton
                    text="Sign In"
                    onPress={onSignInScreenPressed}
                    bgColor="pink"
                    fgColor="black"
                />

                <CustomButton
                    text="Forgot Password?"
                    onPress={onForgotPasswordPressed}

                />

                

                <CustomButton
                    text="Don't have an account? Create One"
                    onPress={onSignUpScreenPressed}

                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 50,
        marginVertical: 30,
        borderRadius: 30,
    },

    text: {

        textAlign: 'right'
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'black',
        margin: 80,

    }
});


export default SignIn;