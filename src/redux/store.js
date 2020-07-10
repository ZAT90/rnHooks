import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import notesReducer from './reducers/notesAppReducer';
import apiReducer from './reducers/apiReducers';

const rootReducer = combineReducers({
    //apiReducer: apiReducer,
   notesReducer,
   apiReducer

})
const store = createStore(rootReducer,applyMiddleware(thunk))

export default store