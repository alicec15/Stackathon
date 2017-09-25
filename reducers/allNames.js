const ALL_NAMES = 'ALL_NAMES';

export const allNames = names => {
  const action = {type: ALL_NAMES, names}
  return action;
}

export default allNamesReducer = (state=[], action) => {
  switch (action.type) {
    case ALL_NAMES:
        return [...state, action.names]
    default:
        return state
  }
}