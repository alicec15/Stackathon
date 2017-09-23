import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export default class Location extends Component {
  static navigationOptions = {
    title: 'Add your location',
  };

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => { 
      const lat = position.coords.latitude; 
      const long = position.coords.longitude; 
      const hi = 'hi';
    })
  }

  render() {
    const { lat, long } = this.props
    return (
      <View>
        <Text>{lat}</Text>
      </View>
    )
  }
}