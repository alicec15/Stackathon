import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'; 
import HomeScreen from './Components/Home';
import MapViewing from './Components/Map';
import LocationScreen from './Components/Location';



export default App = StackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapViewing },
  Location: { screen: LocationScreen }
});


