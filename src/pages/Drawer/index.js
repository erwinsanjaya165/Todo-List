import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../../pages';
import Homescreen from '../Homescreen';
import Tambah from '../Tambah';

const Drawer = createDrawerNavigator();

class LayarSmping extends Component {
  render() {
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Homescreen}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Tambah"
          component={Tambah}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    );
  }
}

export default LayarSmping;
