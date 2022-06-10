import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NavigationStrings from '../../Constants/NavigationStrings';
import CustomButton from '../../Components/CustomButton/CustomButton';

import { Video } from 'expo-av';


const Welcome = ({ navigation }) => {


  const onLETsStartPressed = () => {
    //console.warn('onLETsStartsPressed');

    navigation.navigate(NavigationStrings.SIGNIN)

  };
 
  return (

    <View style={styles.root}>

     {/*   <Video
                source={{ uri: 'https://ak.picdn.net/shutterstock/videos/1057462279/preview/stock-footage-beautiful-opening-pink-rose-on-white-background-petals-of-blooming-pink-rose-flower-open-time.webm' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode='cover'
                shouldPlay
                isLooping
                style={{ 
                           height: 800,
                            position: 'absolute', 
                            left: 0, 
                            right: 0,
                             Top: 0,
                              bottom: 0 }}
                /> */}

      <Image
        style={styles.logo}
        source={require('../../../assets/Images/logo.png')} />

      <View style={styles.container}>

        <Text style={{fontStyle:'italic',
                            margin: 20,
                            paddingTop: 50,
                             paddingBottom: 120,
                              
                               fontSize: 16
                               }}>
                               You're well on your way to protecting your device from being lost or stolen.
                               Let's start with basic setup
                               </Text>





        <CustomButton
          text="LET's  START"
          onPress={onLETsStartPressed}
          bgColor="pink"
          fgColor="black"
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  root: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 150,

  },

  logo: {

    height: 250,
    width: 250,
    marginTop: 60,

  },
  backgroundVideo: {

    position: 'absolute',

  }

});
export default Welcome;