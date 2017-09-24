import { createStore, applyMiddleware, combineReducers } from 'redux';

//subreducers
import currentLocation from './currentlocation';
import currentNote from './currentNote';

//combining subreducers
const reducer = combineReducers({ currentLocation, currentNote });

export default reducer;
export * from './currentlocation';
export * from './currentNote';