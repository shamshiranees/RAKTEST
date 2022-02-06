import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import APIReducer from './APIReducer';

export default combineReducers({
  login: LoginReducer,
  apiReducer: APIReducer,
});
