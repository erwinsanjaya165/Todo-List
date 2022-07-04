import {Dimensions, StyleSheet} from 'react-native';
import {Warna_Abu2, Warna_Background, Warna_Utama} from '../Utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Background,
  },
  textWel: {
    marginTop: 110,
    fontSize: 30,
    fontFamily: 'TitilliumWeb-SemiBold',
    fontWeight: '600',
    color: Warna_Utama,
    left: 24,
  },
  textSign: {
    fontSize: 14,
    left: 24,
    fontWeight: '700',
    fontFamily: 'TitilliumWeb-Regular',
    color: Warna_Abu2,
  },
  viewInput: {
    top: 50,
    marginTop: 20,
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    backgroundColor: Warna_Utama,
    borderRadius: 6,
    justifyContent: 'center',
  },
  input: {
    marginLeft: 40,
    width: '75%',
    height: 48,
  },
  icon: {
    width: 20,
    height: 20,
    left: 15,
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
    width: 23,
    height: 23,
  },
  boxFor: {
    left: 85,
    marginTop: 60,
  },
  textFor: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'TitilliumWeb-Regular',
    color: Warna_Abu2,
  },
  boxLogin: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    marginTop: 130,
    borderRadius: 6,
    backgroundColor: Warna_Abu2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogin: {
    fontSize: 17,
    fontWeight: '900',
    fontFamily: 'TitilliumWeb-SemiBold',
    color: Warna_Background,
  },
  boxtext: {
    marginTop: 15,
    flexDirection: 'row',
  },
  textDon: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'TitilliumWeb-Regular',
    color: Warna_Abu2,
  },
  textCreate: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'TitilliumWeb-Regular',
    color: Warna_Utama,
  },
});
