// import the dependency
import remove from 'lodash.remove'
import {ADD_NOTE , DELETE_NOTE} from '../actions/notesAppActions'

// reducer

const initialState = []

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
        console.log('action type: '+action.type);
        console.log('action id: '+action.id)
        console.log('state '+state)
        console.log('note action payload: '+JSON.stringify(action.payload));
        let testarr = [...state,Object.assign({id: action.id,note: action.payload})];
        console.dir('testarr+ :',testarr);
        return testarr;
      // return [
      //   ...state,
      //   {
      //     id: action.id,
      //     note: action.payload
      //   }
      // ]

    case DELETE_NOTE:
      const deletedNewArray = remove(state, obj => {
        return obj.id != action.payload
      })
      return deletedNewArray

    default:
      return initialState
  }
}

export default notesReducer