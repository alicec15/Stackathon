import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import store from '../store';
import { connect } from 'react-redux';
import { FormLabel, FormInput, FormValidationMessage, Buttons } from 'react-native-elements';
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
      <View>

        {/* adding name */}
        <FormLabel>Title</FormLabel>
        <FormInput 
          onChangeText={(name) => this.setState({ name })}
        />
        <FormValidationMessage>Required Field</FormValidationMessage>      

        {/* setting location to current coords */}
        <FormLabel>Location</FormLabel>
        <FormInput value={currentLocation.toString()}/>

        {/* adding note */}
        <FormLabel>Add your note</FormLabel>
        <FormInput 
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => this.setState({ changeNote: text })}
        />
        <FormValidationMessage>Required Field</FormValidationMessage>

        <Button
          raised
          title='ADD NEW LOCATION :)'
          onPress={() => {
            this.props.handleNote(this.state.changeNote)
            this.props.handleName(this.state.name)
            navigate('Success')
          }}
        />
      </View>
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

