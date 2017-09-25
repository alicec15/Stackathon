import { createStore, applyMiddleware, combineReducers } from 'redux';

//subreducers
import currentLocation from './currentlocation';
import currentNote from './currentNote';
import currentName from './currentName';
import allNames from './allNames';
import allLocations from './allLocations';

//combining subreducers
const reducer = combineReducers({ currentLocation, currentNote, currentName, allNames, allLocations });

export default reducer;
export * from './currentlocation';
export * from './currentNote';
export * from './currentName';
export * from './allNames';
export * from './allLocations';