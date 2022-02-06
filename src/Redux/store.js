import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import apiMiddleware from './Middleware/api';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const releaseMiddleware = [apiMiddleware, thunk];
const devMiddleware = [...releaseMiddleware, logger];
const selectedMiddleware = __DEV__ ? devMiddleware : releaseMiddleware;

const store = createStore(rootReducer, applyMiddleware(...selectedMiddleware));
window.store = store;
export default store;
