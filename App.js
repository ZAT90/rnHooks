import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store.js';

export default function App() {
  //console.log('store: '+store.getState().);
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}
