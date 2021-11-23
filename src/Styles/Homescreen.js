import {StyleSheet, Dimensions} from 'react-native';
import {Warna_Background, Warna_Putih, Warna_Utama} from '../Utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxMenu: {
    height: windowHeight * 0.07,
    backgroundColor: Warna_Background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxDrawer: {
    width: 33,
    height: 33,
    left: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTodo: {
    fontSize: 22,
    left: 80,
    fontWeight: '600',
    fontFamily: 'TitilliumWeb-Regular',
    color: Warna_Utama,
  },
  boxCatatan: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 7,
  },
  catatan: {
    width: windowWidth * 0.42,
    height: windowHeight * 0.25,
    padding: 5,
    margin: '3%',
    borderRadius: 15,
    elevation: 2,
    backgroundColor: Warna_Utama,
  },
  textTitle: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'TitilliumWeb-SemiBold',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  textNote: {
    fontSize: 12,
    color: 'black',
    fontStyle: 'normal',
    fontFamily: 'TitilliumWeb-Light',
  },
  boxDelete: {
    width: windowWidth * 0.42,
    height: '20%',
    right: 5,
    bottom: '1%',
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  boxTambah: {
    width: windowWidth * 0.16,
    height: windowHeight * 0.08,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: Warna_Background,
    elevation: 10,
    right: 30,
    bottom: 30,
  },
});
