import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'; 
import HomeScreen from './Components/Home';
import LocationScreen from './Components/Location';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Location: { screen: LocationScreen }
});

render (
  <Provider store={store}>
    <App />
  </Provider>
)


