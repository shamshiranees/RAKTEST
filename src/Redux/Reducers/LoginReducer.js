import {
  SET_USER_DATA, SET_LOCATION
} from '../Actions/types';
const INITIAL_STATE = {
  data: [],
  loginSuccess: false,
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, loginSuccess: true, data: { ...state.data, ...action.payload } };
    case SET_LOCATION:
      return { ...state, data: { ...state.data, ...action.payload } };

    default:
      return state;
  }
}


