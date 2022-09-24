import { StyleSheet } from 'react-native';
import { Color } from '../../utils/Color';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    height: 90,
    width: '100%',
    borderTopLeftRadius: 65,
    borderTopRightRadius: 65,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
