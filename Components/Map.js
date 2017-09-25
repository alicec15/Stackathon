import React, { Component } from 'react';
import { AsyncStorage, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { currentLocation, retrieveFromStorage } from '../reducers/index.js'

class MapViewing extends Component {
  constructor(props) {
    super(props);

    //this.pinnedLocations = {}
    // this.getStoredLocations = this.getStoredLocations.bind(this)
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

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => { 
      const lat = position.coords.latitude; 
      const long = position.coords.longitude; 
      const location = [lat, long]
      console.log('setting state?', lat, long)
      this.setState({ latitude: lat, longitude: long })
      this.props.handleLocation(location)

      // console.log('setting state?', lat, long)
      // this.setState({ latitude: lat, longitude: long })
    })
    this.props.handleAllLocations()
  }

  // getStoredLocations() {
  //   this.props.allNames.forEach((name) => {
  //     AsyncStorage.getItem(name).then((value) => {
  //       // console.log(value, 'storedlocations')
  //       this.pinnedLocations[name] = JSON.parse(value)
  //     })
  //   })
  // }

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
    // this.getStoredLocations();
    const { currentLocation, allLocations } = this.props;
    console.log(allLocations, 'PLS ')

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
        <MapView.Marker
          key={'Location1'}
          coordinate={{ latitude: 37.7749, longitude: -122.40 }}
          title={'Park'}
          description={'Eventually I will visit you'}
        />
        
        { allLocations && Object.keys(allLocations).map((key)=> {
          console.log('this shouldnt work')
          return this.renderMapMarkers(allLocations[key])
        })  }

      </MapView>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allNames: state.allNames,
    currentLocation: state.currentLocation,
    allLocations: state.allLocations, 
    currentName: state.currentName
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleLocation: function(location) {
      console.log('are you here', location)
      dispatch(currentLocation(location))
    },
    handleAllLocations: function() {
      dispatch(retrieveFromStorage())
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