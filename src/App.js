import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './router';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    );
  }
}
