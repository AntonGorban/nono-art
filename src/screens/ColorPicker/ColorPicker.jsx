import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TriangleColorPicker, toHsv, fromHsv } from 'react-native-color-picker';
import { connect } from 'react-redux';
import sett from '../../settings';

import { pickColorAC } from '../../redux/designerReducer';

const ColorPickerContainer = ({ defaultColor, onPickColor, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Выберите цвет, который хотите использовать и нажмите на него снизу</Text>
    <TriangleColorPicker
      defaultColor={toHsv(defaultColor)}
      onColorSelected={(color) => {
        onPickColor(fromHsv(color));
        navigation.goBack();
      }}
      style={styles.picker}
    />
  </View>
);

const styles = StyleSheet.create({
  picker: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: sett.color.black,
  },
  text: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    fontFamily: sett.font.montserrat.regular,
    color: sett.color.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => ({
  defaultColor: state.designer.colors[state.designer.selectedColor],
});

const mapDispatchToProps = (dispatch) => ({
  onPickColor: (color) => dispatch(pickColorAC(color)),
});

export const ColorPicker = connect(mapStateToProps, mapDispatchToProps)(ColorPickerContainer);
