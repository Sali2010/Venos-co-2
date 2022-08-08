import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../redux/reduser';


const rootReduser  = combineReducers({rootReducer})

export const store = createStore(rootReduser,applyMiddleware(thunk))