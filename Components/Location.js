import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import store from '../store';

export default class Location extends Component {
  static navigationOptions = {
    title: 'Add your location',
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => { 
      const lat = position.coords.latitude; 
      const long = position.coords.longitude; 
    })
  }

  render() {
    const { lat, long } = this.props
    console.log(this.props)
    return (
      <View>
        <Text>{lat}</Text>
      </View>
    )
  }
}
