import React, {Component} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import Navigation from './router';

export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    );
  }
}
