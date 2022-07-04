import {Dimensions, StyleSheet} from 'react-native';
import {Warna_Utama, Warna_Abu2, Warna_Background} from '../Utils/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Background,
  },
  boxBack: {
    width: 40,
    height: 40,
    margin: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCreate1: {
    marginLeft: 25,
    fontSize: 30,
    fontFamily: 'TitilliumWeb-SemiBold',
    fontWeight: '600',
    color: Warna_Utama,
  },
  textCreate2: {
    fontSize: 15,
    marginLeft: 25,
    fontWeight: '700',
    fontFamily: 'TitilliumWeb-Regular',
    color: Warna_Abu2,
  },
  boxCreate: {
    alignItems: 'center',
  },
  viewInput: {
    top: 25,
    marginTop: 20,
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    backgroundColor: Warna_Utama,
    borderRadius: 6,
    justifyContent: 'center',
  },
  textInput: {
    left: 35,
    width: '75%',
    height: 48,
  },
  icon: {
    width: 20,
    height: 20,
    left: 10,
    position: 'absolute',
  },
  boxMata: {
    width: 40,
    height: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 3,
  },
  mata: {
    width: 20,
    height: 20,
  },
  boxReg: {
    marginTop: 140,
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    borderRadius: 6,
    backgroundColor: Warna_Abu2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textReg: {
    fontSize: 18,
    fontWeight: '900',
    fontFamily: 'TitilliumWeb-SemiBold',
    color: Warna_Background,
  },
  boxReady: {
    marginTop: 10,
    flexDirection: 'row',
  },
  textReady: {
    fontSize: 14,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'TitilliumWeb-Regular',
    color: Warna_Abu2,
  },
  textLogin: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'TitilliumWeb-Regular',
    color: Warna_Utama,
  },
});
