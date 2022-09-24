import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import sett from '../../settings';

export const Color = ({
  color = 'red',
  onClick = () => console.warn('onClick func not found on Color.jsx component'),
  isSelected = false,
}) => (
  <TouchableHighlight
    onPress={onClick}
    activeOpacity={0.7}
    underlayColor={sett.color.dark}
    style={{ ...containerStyle, borderWidth: isSelected ? 5 : 0 }}
  >
    <View
      style={{
        ...colorStyle,
        backgroundColor: color,
        borderWidth: isSelected ? 3 : 0,
      }}
    />
  </TouchableHighlight>
);

const containerStyle = {
  height: 75,
  width: 75,
  borderRadius: 75 / 2,
  borderStyle: 'solid',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: sett.color.dark,
};

const colorStyle = {
  height: 70,
  width: 70,
  borderRadius: 40,
  borderStyle: 'solid',
  borderColor: sett.color.white,
  backgroundColor: 'red',
};
