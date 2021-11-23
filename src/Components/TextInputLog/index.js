import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../../Styles/Login';

const TextInputLog = props => {
  return (
    <View style={styles.viewInput}>
      <TextInput
        placeholder={props.judul}
        secureTextEntry={props.titik2}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboard}
        style={styles.input}
      />
      <Image source={props.gambar} style={styles.icon} />
      <TouchableOpacity style={styles.boxMata} onPressOut={props.tekan}>
        <Image source={props.mata} style={styles.mata} />
      </TouchableOpacity>
    </View>
  );
};

export default TextInputLog;
