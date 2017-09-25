import { createStore, applyMiddleware, combineReducers } from 'redux';

//subreducers
import currentLocation from './currentlocation';
import currentNote from './currentNote';
import currentName from './currentName';
import allNames from './allNames';

//combining subreducers
const reducer = combineReducers({ currentLocation, currentNote, currentName, allNames });

export default reducer;
export * from './currentlocation';
export * from './currentNote';
export * from './currentName';
export * from './allNames';