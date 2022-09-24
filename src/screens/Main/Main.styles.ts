import { StyleSheet } from 'react-native';

import { Color } from '../../utils/Color';
import { FontFamily } from '../../utils/FontFamily';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 25,
  },

  buttonContainer: {
    width: '80%',
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Color.white,
    borderRadius: 25,
    marginVertical: 10,
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: Color.white,
    fontFamily: FontFamily.montserratAltRegular,
    textTransform: 'uppercase',
  },
});
