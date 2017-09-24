import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation'; 
import HomeScreen from './Components/Home';
import AddLocationScreen from './Components/AddLocation';
import SuccessScreen from './Components/Success';
import store from './store';

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  AddLocation: { screen: AddLocationScreen },
  Success: { screen: SuccessScreen }
});

export default App = () => {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )

}
