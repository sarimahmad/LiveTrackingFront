import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NavigationStrings from '../../Constants/NavigationStrings'

import CustomButton from '../../Components/CustomButton/CustomButton'

const Permission = ({ navigation }) => {

  const onGetPermissionPressed = () => {
   // console.warn('onGetPermissionPressed');

    navigation.navigate(NavigationStrings.HOME)

  };

  return (

    <View style={styles.root}>



      <View style={{ margin: 30, paddingBottom: 60 }}>
        <Text> In order to protect your device
          <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}> FINDMYPHONE </Text>
          need some permissions</Text>
      </View>


      <View style={styles.container}>

        <Text style={styles.text}>LOCATION</Text>
        <Text style={styles.text}>CALL & CONTACT</Text>
        <Text style={styles.text}>CAMERA & GALLERY</Text>

      </View>

      <CustomButton
        text="Accept All & Continue"
        onPress={onGetPermissionPressed}
        bgColor="pink"
        fgColor="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',

  },
  container: {

    paddingTop: 20,
    paddingBottom: 50,

  },
  text: {

    fontStyle: 'italic',
    fontWeight: 'bold',
    padding: 20,
  }

});


export default Permission;