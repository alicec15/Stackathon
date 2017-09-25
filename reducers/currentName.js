import { AsyncStorage } from 'react-native';

const CURRENT_NAME = 'CURRENT_NAME';

export const currentName = name => {
    const action = {type: CURRENT_NAME, name}; 
    return action; 
}

export default currentNameReducer = (state='', action) => {
    switch (action.type) {
      case CURRENT_NAME:
          return action.name
      default:
          return state
    }
}

export function sendToStorage(obj) {
    return function thunk (dispatch) {
        return AsyncStorage.setItem('main', JSON.stringify(obj), () => console.log('successful storage'))
    }
} 

// export function fetchOrderAccessories() {
//     return function thunk (dispatch) {
//       return axios.get('/api/orders')
//         .then(res => res.data)
//         .then(orderAccessories => {
//           dispatch(load(orderAccessories))
//         })
//     }
//   }