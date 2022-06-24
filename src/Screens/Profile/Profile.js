import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import NavigationStrings from '../../Constants/NavigationStrings'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../Components/CustomButton/CustomButton'
import CustomInput from '../../Components/CustomInput/CustomInput';
import {GetProfile} from '../../helper/api';

const Profile = ({ navigation }) => {


    const [data, setdata] = useState('');
  
    const { height } = useWindowDimensions();
 
    useEffect(async ()=>{
        let id = await AsyncStorage.getItem('profile')
        id = JSON.parse(id);
        console.log("helloo",id);
        await GetProfile(id.id).then(response=>{
            console.log("data==> ",response.data.user);
            if(response.status===200){
                setdata(response.data.user);
            }else{
                alert("Some thing went Wrong");
            }
        });
    },[])
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                   style={styles.logo}
                   source={require('../../../assets/Images/avatar.png')} />

                    <Text style={{marginTop: 20}}>First Name: <Text>{data.first_name}</Text></Text>
                    <Text style={{marginTop: 20}}>last Name: <Text>{data.last_name}</Text></Text>
                    <Text style={{marginTop: 20}}>Email:  <Text>{data.email}</Text></Text>
                    <Text style={{marginTop: 20}}>Number: <Text>{data.number}</Text></Text>
              




            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    root: {
        padding: 50,
    },
    logo: {

        height: 200,
        width: 200,
        alignSelf:'center',
        marginTop: 20
      }
});
export default Profile;