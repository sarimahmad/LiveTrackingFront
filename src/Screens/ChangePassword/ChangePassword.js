import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import NavigationStrings from '../../Constants/NavigationStrings';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';

const ChangePassword = ({ navigation }) => {
   
    const [newPassword, setNewPassword] = useState('');

    const onSubmitPressed = () => {
       // console.warn('Submit');
        navigation.navigate(NavigationStrings.SIGNIN)
    };

    const onSignInPressed = () => {
      //  console.warn('onSignInPressed');
        navigation.navigate(NavigationStrings.SIGNIN)
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>


                <Text style={styles.title}>Change Your Password</Text>

                <CustomInput
                    placeholder="Enter Your New Password"
                    value={newPassword}
                    setValue={setNewPassword}
                />

                <CustomButton
                    text="Submit"
                    onPress={onSubmitPressed}
                    bgColor="pink"
                    fgColor="black"
                />

                <CustomButton
                    text="Back to Sign In"
                    onPress={onSignInPressed}
                    fgColor="red"

                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 30,
        marginVertical: 80,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'black',
        margin: 50,
    }
});

export default ChangePassword;