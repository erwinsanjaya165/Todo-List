import {Dimensions, StyleSheet} from 'react-native';
import {Warna_Abu2, Warna_Background} from '../Utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Warna_Background,
  },
  image: {
    width: windowWidth * 0.66,
    height: windowHeight * 0.4,
    marginTop: 110,
  },
  textMari: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: 'TitilliumWeb-SemiBold',
    fontStyle: 'normal',
    color: 'white',
  },
  textMrpikan: {
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'TitilliumWeb-Regular',
    color: Warna_Abu2,
  },
  boxGet: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.06,
    borderRadius: 6,
    backgroundColor: Warna_Abu2,
    marginTop: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  get: {
    fontSize: 17,
    fontWeight: '900',
    fontFamily: 'TitilliumWeb-SemiBold',
    color: Warna_Background,
  },
});
