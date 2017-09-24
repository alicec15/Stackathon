import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import Map from './Map';
import store from '../store';
import { currentLocation } from '../reducers/index.js'
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'Pin Your Location',
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => { 
      const lat = position.coords.latitude; 
      const long = position.coords.longitude; 
      const location = [lat, long]
      this.props.handleLocation(location)
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container} > 
        <Map />
        <Text>Why are you so forgetful, gosh.</Text>
        <Button
          onPress={() => navigate('AddLocation')}
          title="Map me"
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

const mapStateToProps = (state) => {
  return {
    currentLocation: state.currentLocation
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleLocation: function(location) {
      dispatch(currentLocation(location))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
