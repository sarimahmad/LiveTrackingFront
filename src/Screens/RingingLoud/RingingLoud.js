import React, {useState} from 'react';
import {View, Text,  StyleSheet, ScrollView} from 'react-native';

const RingingLoud = () => {
  

  return(
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
          
      <Text style={styles.title}>RING SETUP</Text>

       

        
        <View style={styles.container}>
          <Text style={styles.text}>

          This Feature make's your phone ring, even if its or silent or vibrate 
           
          1) Ring When Lost
          2) Vibrate When Lost
          3) Loud Ringing
              </Text> 
           </View>
            
           

          

      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({

  root:{
      alignItems: 'center',
      padding: 25,
      marginVertical: 30,

  },

  title:{
      fontSize: 26,
      fontWeight: 'bold',
      color: 'black',
      margin: 10,
      fontStyle: 'italic',
      paddingBottom: 100
      
  },
  container:{

      backgroundColor: 'white',
      paddingTop: 20,
      paddingBottom: 30,
      borderRadius: 20,
      paddingLeft: 10,
      paddingRight: 100,
      marginBottom: 20,
      marginTop: 5,
      
      
  },
  text:{

      textAlign: 'center',
      fontStyle: "italic",
  },
 
});

export default RingingLoud;