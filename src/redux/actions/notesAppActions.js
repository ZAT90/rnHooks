// Action Types

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

let noteID = 0;

export function addnote(note) {
  console.log('note: ' + JSON.stringify(note));
  console.log('noteid' + noteID);
  return (dispatch) => {
    dispatch({ type: ADD_NOTE, payload: note, id: noteID++, });
    // return {
    //   type: ADD_NOTE,
    //   id: noteID++,
    //   note,
    // };
  //};
}
}

export function deletenote(id) {
 // return dispatch => {
  return (dispatch) => {
    dispatch({ type: DELETE_NOTE, payload: id });
    // return {
    //   type: ADD_NOTE,
    //   id: noteID++,
    //   note,
    // };
  //};
}
    // return {
    //   type: DELETE_NOTE,
    //   payload: id,
    // };
 // };
}
