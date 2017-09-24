import { createStore, applyMiddleware, combineReducers } from 'redux';

//subreducers
import currentLocation from './currentlocation';

//combining subreducers
const reducer = combineReducers({ currentLocation });

export default reducer;
export * from './currentlocation';