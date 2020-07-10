// import the dependency
//import remove from 'lodash.remove'
import { GET_LIST } from '../actions/apiActions'

// reducer

const initialState = {}

function apiReducer(state = initialState, action) {
    console.log('initstate'+initialState)
  switch (action.type) {
    case GET_LIST:
        console.log('action api:'+JSON.stringify(action.payload));
      return action.payload
    default:
      return initialState
  }
}

export default apiReducer