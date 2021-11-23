import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  DataKsong,
  DataEmail,
  DataPassword,
  DataConfirmPassword,
  DataFinis,
} from '../../Components/NotifikasiData/index';
import {TextInputReg} from '../../Components';
import {styles} from '../../Styles/Register';
import {Warna_Background, Warna_Utama} from '../../Utils';
import {Email, Eye, PadLock, PasswordLock, User} from '../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Register extends Component {
  state = {
    mata1: true,
    mata2: true,
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    loading: false,
  };

  register() {
    this.setState({loading: true});
    const {name, email, password, password_confirmation} = this.state;

    const dataTosend = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };

    fetch('https://api-todoapp-pp.herokuapp.com/api/auth/register', {
      method: 'POST',
      redirect: 'follow',
      body: JSON.stringify(dataTosend),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);

        if (name === '') {
          DataKsong();
        } else if (
          this.state.email.split('@')[1] !== 'gmail.com' &&
          this.state.email.split('@')[1] !== 'email.com'
        ) {
          DataEmail();
        } else if (this.state.password.length < 6) {
          DataPassword();
        } else if (this.state.password !== this.state.password_confirmation) {
          DataConfirmPassword();
        } else {
          DataFinis();
          this.props.navigation.goBack();
        }
      })

      .catch(err => {
        console.log(err);
      })
      .finally(() => this.setState({loading: false}));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.boxBack}
          onPress={() => this.props.navigation.goBack('Login')}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            color={Warna_Utama}
          />
        </TouchableOpacity>
        <ScrollView>
          <Text style={styles.textCreate1}>Create Account</Text>
          <Text style={styles.textCreate2}>Create a new account</Text>
          <View style={styles.boxCreate}>
            <View>
              <TextInputReg
                gambar={User}
                judul="Username"
                onChangeText={name => this.setState({name})}
              />
              <TextInputReg
                gambar={Email}
                judul="Email"
                onChangeText={email => this.setState({email})}
              />
              <TextInputReg
                gambar={PadLock}
                judul="Password"
                bintang={this.state.mata1}
                onChangeText={password => this.setState({password})}
                tekanMata={() => this.setState({mata1: !this.state.mata1})}
                mata={Eye}
              />
              <TextInputReg
                gambar={PasswordLock}
                judul="Confirm Password"
                bintang={this.state.mata2}
                tekanMata={() => this.setState({mata2: !this.state.mata2})}
                onChangeText={password_confirmation =>
                  this.setState({password_confirmation})
                }
                mata={Eye}
              />
            </View>
            <TouchableOpacity
              style={styles.boxReg}
              onPress={() => this.register()}>
              {this.state.loading ? (
                <ActivityIndicator size={25} color={Warna_Background} />
              ) : (
                <Text style={styles.textReg}>Register</Text>
              )}
            </TouchableOpacity>
            <View style={styles.boxReady}>
              <Text style={styles.textReady}>Already have a account? </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack('Login')}>
                <Text style={styles.textLogin}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
