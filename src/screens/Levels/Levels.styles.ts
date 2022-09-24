import { StyleSheet } from 'react-native';

import { Color } from '../../utils/Color';
import { FontFamily } from '../../utils/FontFamily';

export const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: Color.black,
    paddingTop: 25,
  },

  title: {
    marginBottom: 25,
    fontSize: 25,
    textAlign: 'center',
    color: Color.white,
    fontFamily: FontFamily.montserratAltBold,
    textTransform: 'uppercase',
  },

  container: {
    flex: 1,
  },

  buttonContainer: {
    width: '80%',
    marginHorizontal: '10%',
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Color.white,
    borderRadius: 25,
    marginVertical: 15,
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: Color.white,
    fontFamily: FontFamily.montserratAltRegular,
    textTransform: 'uppercase',
  },
});
