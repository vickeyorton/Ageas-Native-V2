/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigations';
import store from './src/context/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
};

export default App;
