import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import Main from './components/MainComponent';

const store = ConfigureStore();

export default function App() {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
