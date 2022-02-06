import axios from 'axios';
import {API} from '../Actions/types';
import { apiError, apiStart, apiEnd} from '../Actions/api';

const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    label,
  } = action.payload;
  const dataOrParams = ['GET', 'DELETE', 'POST'].includes(method)
    ? 'params'
    : 'data';
    dispatch(apiStart(true));

  axios.defaults.baseURL = 'https://reqres.in/api/';

  axios({
    method: method,
    url: url,
    data: data,
  })
    .then((result) => {
      dispatch(onSuccess(result.data));
    })
    .catch((error) => {
      dispatch(apiError(error.response.status));
      dispatch(onFailure(error));
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
