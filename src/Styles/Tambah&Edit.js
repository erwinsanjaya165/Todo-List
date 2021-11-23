import {StyleSheet, Dimensions} from 'react-native';
import {Warna_Utama, Warna_Background} from '../Utils';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxmenu: {
    height: windowHeight * 0.07,
    backgroundColor: Warna_Background,
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxIcon1: {
    width: 33,
    height: 33,
    left: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    left: 80,
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'TitilliumWeb-Regular',
    color: Warna_Utama,
  },
  boxIcon2: {
    width: 30,
    height: 30,
    right: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxInput1: {
    margin: 15,
    height: windowHeight * 0.07,
    justifyContent: 'center',
    backgroundColor: Warna_Utama,
  },
  input1: {
    margin: 10,
    fontSize: 20,
    height: windowHeight * 0.07,
    fontFamily: 'TitilliumWeb-Regular',
  },
  boxInput2: {
    marginHorizontal: 15,
    height: windowHeight * 0.25,
    backgroundColor: Warna_Utama,
  },
  input2: {
    margin: 5,
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Light',
  },
});
