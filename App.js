/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';

import RootStack from "./src/router";

const AppContainer = createAppContainer (RootStack);

export default class App extends React.Component {
  render () {
    return <AppContainer />;
  }
}
