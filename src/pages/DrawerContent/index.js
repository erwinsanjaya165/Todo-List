import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {
  Avatar,
  Title,
  Text,
  Caption,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {Gambar} from '../../assets';
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
      modal: false,
      switchValue: false,
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
      .then(() => this.getTodo())
      .catch(err => {
        console.log(err);
      });
  }

  getTodo() {
    fetch('https://api-todoapp-pp.herokuapp.com/api/todo', {
      method: 'GET',
      redirect: 'follow',
      headers: {
        Authorization: `bearer ${this.state.token}`,
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({data: responseJson.data});
        console.log(this.state.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.setState({loading: false}));
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
                <Avatar.Image source={Gambar} size={50} />
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
            {/* <Drawer.Section title="Preferences">
              <TouchableRipple>
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <Switch
                    value={this.state.switchValue}
                    onValueChange={switchValue => this.setState({switchValue})}
                  />
                </View>
              </TouchableRipple>
            </Drawer.Section> */}
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
