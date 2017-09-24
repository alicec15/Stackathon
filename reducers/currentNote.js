const CURRENT_NOTE = 'CURRENT_NOTE';

export const currentNote = note => {
    const action = {type: CURRENT_NOTE, note}; 
    return action; 
}


export default currentNoteReducer = (state='', action) => {
    console.log(action.type); 
    switch (action.type) {
        case CURRENT_NOTE:
            return action.note
        default:
            return state
    }
}