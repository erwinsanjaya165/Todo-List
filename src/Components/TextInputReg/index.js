import React from 'react';
import {View, TextInput, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../Styles/Register';

const TextInputReg = props => {
  return (
    <View style={styles.viewInput}>
      <TextInput
        placeholder={props.judul}
        secureTextEntry={props.bintang}
        onChangeText={props.onChangeText}
        style={styles.textInput}
      />
      <Image source={props.gambar} style={styles.icon} />
      <TouchableOpacity style={styles.boxMata} onPressOut={props.tekanMata}>
        <Image source={props.mata} style={styles.mata} />
      </TouchableOpacity>
    </View>
  );
};

export default TextInputReg;
