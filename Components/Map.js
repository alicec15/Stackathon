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
    // this.renderMap = this.renderMap.bind(this)
    this.renderMapMarkers = this.renderMapMarkers.bind(this)

    this.state = {
      latitude: 0,
      longitude: 0
    }
  }

  static navigationOptions = {
      title: 'Pin Your Location',
  };

  //initial rendering of the map yields an empty currentLocation, so region lat and long is undef, 
  //how do i fix this without seeing the warning
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => { 
      const lat = position.coords.latitude; 
      const long = position.coords.longitude; 
      const location = [lat, long]
      this.props.handleLocation(location)
      this.setState({ latitude: lat, longitude: long })
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

  renderMapMarkers(location) {
    return (
      <MapView.Marker
        key={ location.currentName }
        coordinate={{ latitude: location.currentLocation[0], longitude: location.currentLocation[1] }}
        title={ location.currentName }
        description={ location.currentNote }
      />
    )
  }

  render() {
    this.getStoredLocations();
    const { currentLocation } = this.props;

    return (
      <MapView
        style={{flex: 1, height: 200, width: 340, alignSelf: 'center'}}
        showsUserLocation={true}
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.2622,
          longitudeDelta: 0.2601,
        }}
      >
          { Object.keys(this.pinnedLocations).map((key)=> {
            return this.renderMapMarkers(this.pinnedLocations[key])
          })  }
      </MapView>
      
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

const region={
  latitude: currentLocation[0],
  longitude: currentLocation[1],
  latitudeDelta: 0.0422,
  longitudeDelta: 0.0401,
}