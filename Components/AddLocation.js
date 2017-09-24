import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import store from '../store';
import { connect } from 'react-redux';
import { FormLabel, FormInput, FormValidationMessage, Buttons } from 'react-native-elements';


class AddLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeNote: ''
    }
  }

  static navigationOptions = {
    title: 'Add your location',
  };


  render() {
    const { currentLocation } = this.props
    console.log(this.state)
    return (
      <View>
        <FormLabel>Location</FormLabel>
        <FormInput value={currentLocation.toString()}/>

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
          onPress={() => console.log('ive been pressed')}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLocation: state.currentLocation
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation)

