import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import * as Location from "expo-location";
import socket from '../../helper/socket'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({ navigation }) => {

  const [pin, setPin] = React.useState({
    latitude: 31.403,
    longitude: 74.2106
  });
  const ws = useRef(null);

  React.useEffect(() => {
    (async () => {
      let data = await AsyncStorage.getItem("profile");
      let id = JSON.parse(data)
      console.log(id.id);
      ws.current = new WebSocket(`${socket}/ws/Mobile/${id.id}/`);
      ws.current.onopen = () => {
        console.log('we are connected');
      };
      ws.onerror = e => {
        console.log(e.message);
      };
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const interval = setInterval( async ()=>{
        let location = await Location.getCurrentPositionAsync({});
        let obj = {latitude: location.coords.latitude, longitude: location.coords.longitude}
        setPin(obj);
        ws.current.send(JSON.stringify(obj));

      },1500)

      return ()=>{
        clearInterval(interval);
      }
    })();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <MapView style={styles.map}
        showsUserLocation={true}
          Region={{
            latitude: 31.403,
            longitude: 74.2106,
            latitudeDelta: 0.0005,
            longitudeDelta: 0.0005,
          }}
                
        >
{/* 
          <Marker 
          coordinate={{latitude: pin.latitude, longitude: pin.longitude}}
          pinColor='gold'
          image={require('../../../assets/marker.png')}
          style={{height:20, width: 20}}
          /> */}
          
        </MapView>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    padding: 20,
    marginVertical: 80,
    marginTop: 5,
    flex: 1

  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    height: 700,
  },
});

export default Home;
