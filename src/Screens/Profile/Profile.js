import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import NavigationStrings from '../../Constants/NavigationStrings'

import CustomButton from '../../Components/CustomButton/CustomButton'
import CustomInput from '../../Components/CustomInput/CustomInput';
import axios from 'axios';


const Profile = ({ navigation }) => {


    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [homeaddress, setHomeaddress] = useState('');
    const [DOB, setDOB] = useState('');

    const { height } = useWindowDimensions();

    const onSubmitPressed = () => {
        let url = "http://127.0.0.1:8000/api/profile/"
    const user = {
        first_name: first_name,
        last_name: last_name,
        homeaddress: homeaddress,
        DOB: DOB
    };

    axios.post(url, user)
    .then(response => response?.token ? navigation.navigate(NavigationStrings.HOME) : console.warn("Incorrect Email or password")
    )
       // navigation.navigate(NavigationStrings.HOME)
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>


                

                <Image
                   style={styles.logo}
                   source={require('../../../assets/Images/avatar.png')} />

                   

                <CustomInput
                    placeholder="First Name"
                    value={first_name}
                    setValue={setFirstName}
                />

                <CustomInput
                    placeholder="Last Name"
                    value={last_name}
                    setValue={setLastName}
                />
                <CustomInput
                    placeholder="HomeAddress"
                    value={homeaddress}
                    setValue={setHomeaddress}
                    secureTextEntry
                />
                <CustomInput
                    placeholder="DOB"
                    value={DOB}
                    setValue={setDOB}
                    secureTextEntry
                />
                
                <CustomButton
                    text="Submit"
                    onPress={onSubmitPressed}
                    bgColor="pink"
                    fgColor="black"
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
    logo: {

        height: 200,
        width: 200,
        marginTop: 20
      }
});
export default Profile;