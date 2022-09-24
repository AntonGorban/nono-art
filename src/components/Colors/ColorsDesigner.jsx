import React from 'react';
import { View, StyleSheet } from 'react-native';
import sett from '../../settings';

import { ColorDesigner } from '../Color/ColorDesigner';

export const ColorsDesigner = ({
  colors = ['red', 'red', 'red'],
  selectedColor = null,
  setSelectedColor = () => console.warn('setSelectedColor func not found on ColorsDesigner.jsx component'),
  setColor = () => console.warn('setColor func not found on ColorsDesigner.jsx component'),
  toColorPicker = () => console.warn('toColorPicker func not found on ColorsDesigner.jsx component'),
}) => (
  <View style={styles.container}>
    <ColorDesigner
      color={colors[0]}
      onClick={() => setSelectedColor(0)}
      onLongPress={() => toColorPicker(0)}
      onInput={(color) => setColor(0, color)}
      isSelected={selectedColor === 0}
    />
    <ColorDesigner
      color={colors[1]}
      onClick={() => setSelectedColor(1)}
      onLongPress={() => toColorPicker(1)}
      onInput={(color) => setColor(1, color)}
      isSelected={selectedColor === 1}
    />
    <ColorDesigner
      color={colors[2]}
      onClick={() => setSelectedColor(2)}
      onLongPress={() => toColorPicker(2)}
      onInput={(color) => setColor(2, color)}
      isSelected={selectedColor === 2}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: sett.color.white,
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
