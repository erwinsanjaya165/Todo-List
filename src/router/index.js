import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  Login,
  Register,
  Introduction,
  Edit,
  LayarSmping,
  DrawerContent,
} from '../pages';

const Stack = createNativeStackNavigator();

export default class Navigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homescreen"
          component={LayarSmping}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DrawerContent"
          component={DrawerContent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tambah"
          component={LayarSmping}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}
