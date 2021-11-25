import {Alert} from 'react-native';
export const DataKsong = () =>
  Alert.alert('Warning !', 'The name field is required', [
    {
      text: 'Ok',
    },
  ]);

export const DataEmail = () =>
  Alert.alert('Email !', 'The email must be a valid email address', [
    {
      text: 'Ok',
    },
  ]);

export const DataPassword = () =>
  Alert.alert('Password !', 'The password must be at least 6 characters', [
    {
      text: 'Ok',
    },
  ]);

export const DataConfirmPassword = () =>
  Alert.alert(
    'Confirm Password !',
    'The password confirmation dose not match',
    [
      {
        text: 'Ok',
      },
    ],
  );

export const DataFinis = () =>
  Alert.alert('Success !', [
    {
      text: 'Ok',
    },
  ]);

export const PasswordLogin = () =>
  Alert.alert('Password & email !', 'not respond', [
    {
      text: 'Ok',
    },
  ]);
