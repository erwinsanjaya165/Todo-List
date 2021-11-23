import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {styles} from '../../Styles/Homescreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Warna_Abu2, Warna_Utama} from '../../Utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Homescreen extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
      id: '',
      title: '',
      note: '',
      token: '',
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
        Accept: 'application/json',
        Authorization: `bearer ${this.state.token}`,
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({data: responseJson.data});
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.setState({loading: false}));
  }

  deleteTodo(id) {
    fetch(`https://api-todoapp-pp.herokuapp.com/api/todo/${id}`, {
      method: 'DELETE',
      redirect: 'follow',
      headers: {
        Authorization: `bearer ${this.state.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.getTodo();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.setState({loading: false}));
  }

  TekanDel = id =>
    Alert.alert('Hapus data', 'Anda yakin ingin menghapusnya?', [
      {
        text: 'Cancel',
        onPress: () => this.props.navigation.navigate('Homescreen'),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => this.deleteTodo(id),
      },
    ]);

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.boxMenu}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
              style={styles.boxDrawer}>
              <MaterialCommunityIcons
                name="menu"
                size={25}
                color={Warna_Utama}
              />
            </TouchableOpacity>
            <Text style={styles.textTodo}>Todo List</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.boxCatatan}>
            {this.state.data.map((value, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.navigate('Edit', {
                    id: value.id,
                    title: value.title,
                    note: value.note,
                  });
                }}
                style={styles.catatan}>
                <Text style={styles.textTitle}>
                  {value.title.substr(0, 15)}
                </Text>
                <Text style={styles.textNote}>{value.note.substr(0, 100)}</Text>
                <View style={styles.boxDelete}>
                  <TouchableOpacity onPress={() => this.TekanDel(value.id)}>
                    <MaterialCommunityIcons
                      name="trash-can-outline"
                      size={27}
                      color={Warna_Abu2}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Tambah')}
          style={styles.boxTambah}>
          <MaterialCommunityIcons name="plus" size={35} color={Warna_Utama} />
        </TouchableOpacity>
      </View>
    );
  }
}
