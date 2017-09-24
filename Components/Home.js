import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import Map from './Map';
import store from '../store';
import { connect } from 'react-redux';
import 

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: undefined,
      long: undefined
    }
  }

  static navigationOptions = {
    title: 'Pin Your Location',
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => { 
      const lat = position.coords.latitude; 
      const long = position.coords.longitude; 
      this.setState({ lat, long });
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    const { lat, long } = this.state;
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

const mapStateToProps = (state) => {
  return {
    currentLocation: state.currentLocation
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleLocation: function(lat, long) {
      dispatch(currentLocation([lat, long]))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
