import {Dimensions, StyleSheet} from 'react-native';
import {Warna_Background, Warna_Utama} from '../Utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Warna_Background,
  },
  logo: {
    width: windowWidth * 0.21,
    height: windowHeight * 0.11,
  },
  text: {
    marginTop: 7,
    fontSize: 23,
    fontFamily: 'TitilliumWeb-Light',
    fontWeight: '700',
    color: Warna_Utama,
  },
});
