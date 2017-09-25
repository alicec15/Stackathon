import React, { Component } from 'react';
import { AsyncStorage, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { currentLocation } from '../reducers/index.js'

class MapViewing extends Component {
  constructor(props) {
    super(props);

    this.pinnedLocations = {}
    this.getStoredLocations = this.getStoredLocations.bind(this)
  }

  static navigationOptions = {
      title: 'Pin Your Location',
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => { 
      const lat = position.coords.latitude; 
      const long = position.coords.longitude; 
      const location = [lat, long]
      this.props.handleLocation(location)
    })
  }

  getStoredLocations() {
    this.props.allNames.forEach((name) => {
      AsyncStorage.getItem(name).then((value) => {
        // console.log(value, 'storedlocations')
        this.pinnedLocations[name] = JSON.parse(value)
      })
    })
  }

  render() {
    this.getStoredLocations();
    const { currentLocation } = this.props;
    console.log(currentLocation, 'where ya at');
    // console.log(this.pinnedLocations, 'did i get from async')

    return (
      currentLocation && 
      <MapView
        style={{flex: 1, height: 200, width: 340, alignSelf: 'center'}}
        showsUserLocation={true}
        region={{
          latitude: currentLocation[0],
          longitude: currentLocation[1],
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0401,
        }}
      />
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allNames: state.allNames,
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

export default connect(mapStateToProps, mapDispatchToProps)(MapViewing)