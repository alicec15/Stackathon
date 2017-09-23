import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import Map from './Map';


export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: undefined,
      long: undefined
    }
  }

  static navigationOptions = {
    title: 'Pin Your Location',
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => { 
      const lat = position.coords.latitude; 
      const long = position.coords.longitude; 
      this.setState({ lat, long });
      console.log(position)
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container} > 
        <Map />
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={(lat, long) => navigate('Location')}
          title="Map with me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});