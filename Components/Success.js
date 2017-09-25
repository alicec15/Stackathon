import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, Text, Image } from 'react-native';
import store from '../store';
import { connect } from 'react-redux';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { sendToStorage, retrieveFromStorage } from '../reducers/index.js'

class Success extends Component {
  constructor(props) {
    super(props);
  }

  // sendToStorage(obj){
  //   AsyncStorage.setItem(this.props.currentName, JSON.stringify(obj), () => console.log('successful storage'))
  // }

  render() { 
    const { currentLocation, currentNote, currentName } = this.props;
    const noteObj = { currentLocation, currentNote, currentName };
    this.props.handleStorage(noteObj, currentName);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      
        <Text style={{ fontFamily: 'Verdana', fontSize: 70, textAlign: 'center'}}>LOCATION SAVED</Text>
        <Button
          
          raised
          title='BACK TO MAP :D'
          onPress={() => {
            navigate('Home')
          }}
        />
        <Image
          style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end',  }}
          source={require('../public/cat3.gif')}
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleStorage: function(obj, name) {
      const locationObj = {}
      console.log(name, 'what is my  name')
      locationObj[name] = obj
      dispatch(sendToStorage(locationObj))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Success)