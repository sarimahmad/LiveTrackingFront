import { View, Text, StyleSheet, Dimensions,Switch, ScrollView } from 'react-native'
import React, { useRef } from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import socket from '../../helper/socket'



const DeviceTracking = ({ navigation }) => {


  const ws = useRef(null);
  const [location,setLocation] = React.useState({latitude:0, longitude:0});

  React.useEffect( async()=>{
    let data = await AsyncStorage.getItem("profile");
    let id = JSON.parse(data)
    console.log(id.id);
    ws.current = new WebSocket(`${socket}/ws/Mobile/${id.id}/`);
    ws.current.onmessage = e => {
      let currentPosition = JSON.parse(e.data);
      setLocation(currentPosition);
      console.log('Current Postion', currentPosition);
    };

    return ()=>{
    
    }
  },[])

  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <MapView style={styles.map}
          Region={{
            latitude: 31.403,
            longitude: 74.2106,
            latitudeDelta: 0.0005,
            longitudeDelta: 0.0005,
          }}
                
        >

          <Marker 
          coordinate={{latitude: location.latitude, longitude: location.longitude}}
          pinColor='gold'
          image={require('../../../assets/marker.png')}
          style={{height:20, width: 20}}
          />
          
        </MapView>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 20,

  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    fontStyle: 'italic',

  },
  container: {

    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 40,
    paddingLeft: 10,
    paddingRight: 40,
    marginBottom: 40,
    marginTop: 40,


  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    height: 700,
  },
  text: {

    textAlign: 'center',
    fontStyle: "italic",
    fontWeight: 'bold',
  },

});

export default DeviceTracking;