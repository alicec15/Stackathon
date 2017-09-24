const CURRENT_LOCATION = 'CURRENT_LOCATION';

export const currentLocation = location => {
    const action = {type: CURRENT_LOCATION, location}; 
    return action; 
}


export default currentLocationReducer = (state=[], action) => {
    console.log(action.type); 
    switch (action.type) {
        case CURRENT_LOCATION:
            return action.location
        default:
            return state
    }
}