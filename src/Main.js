import App from './App';
import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
