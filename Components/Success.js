import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, Text } from 'react-native';
import store from '../store';
import { connect } from 'react-redux';
import { FormLabel, FormInput, FormValidationMessage, Buttons } from 'react-native-elements';

class Success extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <View style={styles.container}>
        <Text>YOU DID IT</Text>
      </View>
    )
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
    currentLocation: state.currentLocation,
    currentNote: state.currentNote
  }
}

export default connect(mapStateToProps)(Success)