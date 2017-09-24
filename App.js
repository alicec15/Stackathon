import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation'; 
import HomeScreen from './Components/Home';
import AddLocationScreen from './Components/AddLocation';
import store from './store';

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  AddLocation: { screen: AddLocationScreen }
});

export default App = () => {
  console.log("whyyyy", store); 

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )

}
