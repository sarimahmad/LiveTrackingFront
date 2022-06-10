import React, {Component} from 'react';
import {  View } from 'react-native';
import Routes from './src/Navigation/Routes';
import { NativeModules } from 'react-native';



const App = () => {
  return (
     
       <View style={{flex:1}}>
               <Routes/>

       </View>
  );
};


export default App;