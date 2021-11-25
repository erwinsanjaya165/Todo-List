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

export default class edit extends Component {
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
          this.setState({
            token: value,
            title: this.props.route.params.title,
            note: this.props.route.params.note,
            id: this.props.route.params.id,
          });
        } else {
          this.props.navigation.replace('Homescreen');
        }
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.state.id);
  }

  editTodo() {
    this.setState({loading: true});
    const {title, note} = this.state;

    const dataTosend = {
      title: title,
      note: note,
    };
    fetch(`https://api-todoapp-pp.herokuapp.com/api/todo/${this.state.id}`, {
      method: 'PUT',
      redirect: 'follow',
      body: JSON.stringify(dataTosend),
      headers: {
        Authorization: `bearer  ${this.state.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.props.navigation.replace('Homescreen');
      })
      .catch(err => console.log(err))
      .finally(() => this.setState({loading: false}));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxmenu}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack('Homescreen')}
            style={styles.boxIcon1}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={25}
              color={Warna_Utama}
            />
          </TouchableOpacity>
          <Text style={styles.text}> Edit Todo List </Text>
          <TouchableOpacity
            onPress={() => this.editTodo()}
            style={styles.boxIcon2}>
            {this.state.loading ? (
              <ActivityIndicator size={25} color={Warna_Utama} />
            ) : (
              <MaterialCommunityIcons
                name="pencil-outline"
                size={23}
                color={Warna_Utama}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.boxInput1}>
          <TextInput
            onChangeText={title => this.setState({title})}
            value={this.state.title}
            style={styles.input1}
          />
        </View>
        <View style={styles.boxInput2}>
          <TextInput
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
