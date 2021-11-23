import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../../Styles/Introduction';
export default class Introduction extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/image/image.png')}
          style={styles.image}
        />
        <Text style={styles.textMari}> Mari List Target Antum </Text>
        <Text style={styles.textMrpikan}>
          Merapikan Target Antum dengan aplikasi Todo List
        </Text>
        <TouchableOpacity
          style={styles.boxGet}
          onPress={() => this.props.navigation.replace('Homescreen')}>
          <Text style={styles.get}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
