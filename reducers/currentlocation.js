const CURRENT_LOCATION = 'CURRENT_LOCATION';

export const currentLocation = location => ({type: CURRENT_LOCATION, location})

export default currentLocationReducer = (state=[], action) => {
    switch (action.type) {
        case CURRENT_LOCATION:
            return action.location
        default:
            return state
    }
}