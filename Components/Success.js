import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, Text, Button } from 'react-native';
import store from '../store';
import { connect } from 'react-redux';
import { FormLabel, FormInput, FormValidationMessage, Buttons } from 'react-native-elements';

class Success extends Component {
  constructor(props) {
    super(props);
  }

  sendToStorage(obj){
    AsyncStorage.setItem(this.props.currentName, JSON.stringify(obj), () => console.log('successful storage'))
  }

  render() { 
    const { currentLocation, currentNote, currentName } = this.props;
    const noteObj = { currentLocation, currentNote };
    this.sendToStorage(noteObj);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>YOU DID IT</Text>
        <Button
          raised
          title='BACK TO MAP :D'
          onPress={() => {
            navigate('Home')
          }}
        />
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
    currentNote: state.currentNote,
    currentName: state.currentName

  }
}

export default connect(mapStateToProps)(Success)