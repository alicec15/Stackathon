import { AsyncStorage } from 'react-native';

const ALL_LOCATIONS = 'ALL_LOCATIONS';

export const allLocations = locations => {
  const action = {type: ALL_LOCATIONS, locations}
  return action;
}

export default allLocationsReducer = (state={}, action) => {
  switch (action.type) {
    case ALL_LOCATIONS:
        return action.locations
    default:
        return state
  }
}

export function retrieveFromStorage() {
  return function thunk (dispatch) {
    return AsyncStorage.getItem('main').then((value) => {
      value = JSON.parse(value)
      const newLocation = {}
      console.log(newLocation, 'hi')
      return dispatch(allLocations(value))
    })
  }
} 
// AsyncStorage.getItem(name).then((value) => {
//   // console.log(value, 'storedlocations')
//   this.pinnedLocations[name] = JSON.parse(value)