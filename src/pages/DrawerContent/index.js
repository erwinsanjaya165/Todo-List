import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {foto} from '../../assets';
import {styles} from '../../Styles/DrawerContent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export default class DrawerContent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      id: '',
      title: '',
      note: '',
      token: '',
      loading: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then(value => {
        if (value != null) {
          this.setState({token: value});
        } else {
          this.props.navigation.replace('Login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  logout() {
    fetch('https://api-todoapp-pp.herokuapp.com/api/auth/logout', {
      method: 'POST',
      redirect: 'follow',
      headers: {
        Authorization: `bearer ${this.state.token}`,
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        AsyncStorage.removeItem('token');
        this.props.navigation.replace('Login');
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.setState({loading: false}));
  }

  WarningLogout = () =>
    Alert.alert('Log out', ' are you sure you want to logout?', [
      {
        text: 'cancel',
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => this.logout(),
      },
    ]);

  render() {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Avatar.Image source={foto} size={50} />
                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Title style={styles.title}>Erwin Sanjaya</Title>
                  <Caption style={styles.caption}>My App</Caption>
                </View>
              </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
                label="Home"
                onPress={() => this.props.navigation.navigate('Home')}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="plus" color={color} size={size} />
                )}
                label="Add Todo List"
                onPress={() => this.props.navigation.navigate('Tambah')}
              />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Logout"
            onPress={() => this.WarningLogout()}
          />
        </Drawer.Section>
      </View>
    );
  }
}
