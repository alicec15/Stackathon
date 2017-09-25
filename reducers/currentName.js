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