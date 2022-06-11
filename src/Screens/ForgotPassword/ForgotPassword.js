import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import NavigationStrings from '../../Constants/NavigationStrings';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomInput from '../../Components/CustomInput/CustomInput';
import { CheckUSer } from '../../helper/api';


const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const UserExits = async ()=>{
    let data ={email: email}
    await CheckUSer(data).then(response=>{
      if (response && response.status ===200){
        navigation.navigate(NavigationStrings.CHANGEPASSWORD,{email:email});
      }else{
        alert("Email Does't Exits");
      }
    });
  }

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
          onPress={UserExits}
          bgColor="pink"
          fgColor="black"
        />

        <CustomButton
          text="Back to Sign In"
          onPress={()=> navigation.navigate(NavigationStrings.SIGNIN)}
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