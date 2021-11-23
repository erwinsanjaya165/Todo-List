import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {styles} from '../../Styles/Tambah&Edit';
import {Warna_Utama} from '../../Utils';
export default class Tambah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      enter: true,
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
      .catch(err => {
        console.log(err);
      });
  }

  addTodo() {
    this.setState({loading: true});
    const {note, title} = this.state;

    const dataTosend = {
      title: title,
      note: note,
    };
    fetch('https://api-todoapp-pp.herokuapp.com/api/todo', {
      method: 'POST',
      body: JSON.stringify(dataTosend),
      redirect: 'follow',
      headers: {
        Accept: 'application/json',
        Authorization: `bearer ${this.state.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.props.navigation.replace('Homescreen');
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.setState({loading: false}));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxmenu}>
          <TouchableOpacity
            onPress={() => this.props.navigation.openDrawer()}
            style={styles.boxIcon1}>
            <MaterialCommunityIcons name="menu" size={25} color={Warna_Utama} />
          </TouchableOpacity>
          <Text style={styles.text}> My Todo List </Text>
          <TouchableOpacity
            onPress={() => this.addTodo()}
            style={styles.boxIcon2}>
            {this.state.loading ? (
              <ActivityIndicator size={25} color={Warna_Utama} />
            ) : (
              <MaterialCommunityIcons
                name="check"
                size={27}
                color={Warna_Utama}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.boxInput1}>
          <TextInput
            placeholder="Title :"
            onChangeText={title => this.setState({title})}
            value={this.state.title}
            style={styles.input1}
          />
        </View>
        <View style={styles.boxInput2}>
          <TextInput
            placeholder="Note :"
            multiline={true}
            onChangeText={note => this.setState({note})}
            value={this.state.note}
            style={styles.input2}
          />
        </View>
      </View>
    );
  }
}
