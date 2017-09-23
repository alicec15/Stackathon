import React, { Component } from 'react';
import { View, Button } from 'react-native';
import MapView from 'react-native-maps';

export default class MapViewing extends Component {
  static navigationOptions = {
      title: 'Pin Your Location',
  };
  render() {
    return (
      <MapView
        style={{flex: 1, height: 200, width: 340, alignSelf: 'center'}}
        showsUserLocation={true}
      />
    );
  }
}
  