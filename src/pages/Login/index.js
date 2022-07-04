import React, {Component} from 'react';
import {styles} from '../../Styles/Login';
import {Warna_Background} from '../../Utils';
import {TextInputLog} from '../../Components';
import {Email, Eye, PadLock} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PasswordLogin} from '../../Components/NotifikasiData';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';

export default class Login extends Component {
  state = {
    mata: true,
    email: '',
    password: '',
    loading: false,
  };

  login() {
    if (this.state.email == '') {
      Alert.alert('Email !', 'Anda belum mengisi email');
    } else if (
      this.state.email.split('@')[1] !== 'email.com' &&
      this.state.email.split('@')[1] !== 'gmail.com'
    ) {
      Alert.alert('Email !', 'Email yang anda masukkan salah');
    } else if (this.state.password == '') {
      Alert.alert('Password !', 'Anda belum mengisi password');
    } else if (this.state.password.length < 6) {
      Alert.alert('Password !', 'Password minimal 6 karakter');
    } else {
      this.setState({loading: true});
      const {email, password} = this.state;

      const dataTosend = {
        email: email,
        password: password,
      };

      fetch('https://api-todoapp-pp.herokuapp.com/api/auth/login', {
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify(dataTosend),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(result => {
          console.log(result.token.original.access_token);
          AsyncStorage.setItem('token', result.token.original.access_token);
          if (result.status === 'success') {
            Alert.alert('', 'Login Success', [], {cancelable: true});
            this.props.navigation.replace('Homescreen');
          } else {
            Alert.alert(
              'Perhatian !',
              'Akun anda belum terdaftar, silahkan register terlebih dahulu',
            );
          }
        })
        .catch(err => {
          console.log(err);
          PasswordLogin();
        })
        .finally(() => this.setState({loading: false}));
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textWel}>Welcome Back</Text>
        <Text style={styles.textSign}>sign to continue</Text>
        <View style={{alignItems: 'center'}}>
          <TextInputLog
            gambar={Email}
            judul="Email"
            onChangeText={email => this.setState({email})}
          />
          <TextInputLog
            gambar={PadLock}
            judul="Password"
            keyboard="name-phone-pad"
            titik2={this.state.mata}
            tekan={() => this.setState({mata: !this.state.mata})}
            onChangeText={password => this.setState({password})}
            mata={Eye}
          />
          <View style={styles.boxFor}>
            <Text style={styles.textFor}>Forgot Password?</Text>
          </View>
          <TouchableOpacity
            style={styles.boxLogin}
            onPress={() => this.login()}>
            {this.state.loading ? (
              <ActivityIndicator size={25} color={Warna_Background} />
            ) : (
              <Text style={styles.textLogin}>LOGIN</Text>
            )}
          </TouchableOpacity>
          <View style={styles.boxtext}>
            <Text style={styles.textDon}>Don't have account? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.textCreate}>Create a new account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
