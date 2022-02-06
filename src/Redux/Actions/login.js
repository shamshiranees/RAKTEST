import apiAction from './index';
import {
  DATA_FETCH_ERROR,
  SET_USER_DATA,SET_LOCATION
} from './types';

export function LoginUser(data) {
  return apiAction({
    url:
      '/users?delay=2',
    method: 'POST',
    data: data,
    onSuccess: setLoginSuccess,
    onFailure: setOnError,
    label: 'LOGIN_USER',
  });
}

function setLoginSuccess(data) {
  return {
    type: SET_USER_DATA,
    payload: data,
  };
}

export function setLocationValue(data) {
  return {
    type: SET_LOCATION,
    payload: data,
  };
}

function setOnError() {
  return {
    type: DATA_FETCH_ERROR,
    payload: 'error',
  };
}
