import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from '../../Styles/Splash';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {};
    setTimeout(() => {
      AsyncStorage.getItem('token').then(value => {
        if (value != null) {
          this.props.navigation.replace('Introduction');
        } else {
          this.props.navigation.replace('Login');
        }
      });
    }, 5000);
  }
  render() {
    return (
      <View style={styles.container}>
        <LottieView
          source={require('../../assets/lottie/lf30_editor_zsixb0ry.json')}
          loop={true}
          autoPlay={true}
        />
      </View>
    );
  }
}
