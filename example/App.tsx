/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

import {Button} from './lib';

function App(): JSX.Element {
  return (
    <SafeAreaView style={s.safeArea}>
      <Button label="okeee" />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safeArea: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ebebeb',
  },
});

export default App;
