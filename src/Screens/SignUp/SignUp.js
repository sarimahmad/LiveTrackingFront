import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import NavigationStrings from '../../Constants/NavigationStrings'
import CustomButton from '../../Components/CustomButton/CustomButton'
import CustomInput from '../../Components/CustomInput/CustomInput';
import {SignUpform} from '../../helper/api'


const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const { height } = useWindowDimensions();

    const Login = async ()=>{

        let data ={
            email: email,
            password: password,
        }
        
        if (password === passwordRepeat){
            await SignUpform(data).then(response=>{
            if(response.status===200){
                navigation.navigate(NavigationStrings.SIGNIN)
            }else{
                alert("Wrong Email password")
            }
        });
        }else{
            alert("Password Does not Match")
        }
    
    }

    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create Account</Text>

               
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
                <CustomInput
                    placeholder="PasswordRepeat"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry
                />
                <CustomButton
                    text="Register"
                    onPress={Login}
                    bgColor="pink"
                    fgColor="black"
                />


                <Text style={styles.text}>By Registering, you confirm that you accept our{' '}
                    {/* <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text> */}

                </Text>



                <CustomButton
                    text="Have an account? Sign In"
                    // onPress={onSignInPressed}

                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 50,
    },

    text: {

        color: 'gray',
        marginVertical: 10,
        paddingTop: 20,
        paddingBottom: 10
    },

    link: {
        color: 'red',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'black',
        margin: 30,
        paddingBottom: 20
    }
});
export default SignUp;