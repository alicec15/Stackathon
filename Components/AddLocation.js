import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import store from '../store';
import { connect } from 'react-redux';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { currentNote, currentName, allNames } from '../reducers/index.js'



class AddLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      changeNote: ''
    }
  }

  static navigationOptions = {
    title: 'Add your location',
  };


  render() {
    const { currentLocation } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <Image
      style={{flex:1, alignSelf: 'stretch',  }}
      source={require('../public/cat2.gif')}
      >

        {/* adding name */}
        <FormLabel labelStyle={{ backgroundColor: "transparent" }}>Title</FormLabel>
        <FormInput 
          onChangeText={(name) => this.setState({ name })}
        />
        <FormValidationMessage labelStyle={{ backgroundColor: "transparent" }}>Required Field</FormValidationMessage>      

        {/* setting location to current coords */}
        <FormLabel labelStyle={{ backgroundColor: "transparent" }}>Location</FormLabel>
        <FormInput value={currentLocation.toString()}/>

        {/* adding note */}
        <FormLabel labelStyle={{ backgroundColor: "transparent" }}>Add your note</FormLabel>
        <FormInput 
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => this.setState({ changeNote: text })}
        />
        <FormValidationMessage labelStyle={{ backgroundColor: "transparent" }}>Required Field</FormValidationMessage>

        <Button
          raised
          title='ADD NEW LOCATION :)'
          onPress={() => {
            this.props.handleNote(this.state.changeNote)
            this.props.handleName(this.state.name)
            navigate('Success')
          }}
        />
        
        {/* <Image
          style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end',  }}
          source={require('../public/cat2.gif')}
        /> */}

      </Image>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLocation: state.currentLocation,
    currentNote: state.currentNote,
    currentName: state.currentName,
    allNames: state.allNames
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleNote: function(note) {
      dispatch(currentNote(note))
    },
    handleName: function(name) {
      dispatch(currentName(name))
      dispatch(allNames(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation)

