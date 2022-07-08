import {combineReducers, createStore} from 'redux';
import counter from './reducers/counter'
import buy from "./reducers/buy";

export default createStore(combineReducers({counter, buy}))
