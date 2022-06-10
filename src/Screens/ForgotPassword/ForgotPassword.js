import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import NavigationStrings from '../../Constants/NavigationStrings';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';
import axios from 'axios';


const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const onSendPressed = () => {
    let url = "http://127.0.0.1:8000/api/auth/password/reset/"
    const user = {
        email: email,
    };

    axios.post(url, user)
    .then(response => response?.token ? navigation.navigate(NavigationStrings.CHANGEPASSWORD) : console.warn("Incorrect Email")
    )
  };

  const onSignInPressed = () => {
  //  console.warn('onSignInPressed');

    navigation.navigate(NavigationStrings.SIGNIN)
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>


        <Text style={styles.title}>Reset Your Password</Text>

        <CustomInput
          placeholder="Enter your Email"
          value={email}
          setValue={setEmail}
        />


        <CustomButton
          text="Send"
          onPress={onSendPressed}
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
    marginVertical: 60,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'black',
    margin: 50,
  }
});

export default ForgotPassword;