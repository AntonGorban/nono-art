import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import sett from '../../settings';

export const Counter = ({
  values = [0, 0, 0],
  colors = [sett.color.dark, sett.color.dark, sett.color.dark],
  cellSize,
  cellBorderRadius,
  bigCellSize,
  counterFontSize,
  counterIdx,
  horizontal = true,
  onClick = () => console.warn('onClick func not found on Counter.jsx component'),
}) => (
  <TouchableOpacity activeOpacity={0.7} onPress={onClick}>
    <View
      style={{
        ...counterStyle,
        width: horizontal ? bigCellSize : cellSize,
        height: horizontal ? cellSize : bigCellSize,
        borderRadius: cellBorderRadius,
        flexDirection: horizontal ? 'row' : 'column',
      }}
    >
      {values.map((value, valueIdx) => (
        <Text
          style={{
            ...textStyle,
            fontSize: counterFontSize,
            color: colors[valueIdx],
          }}
          key={`counter.${horizontal ? 'row' : 'col'}.${counterIdx}.${valueIdx}`}
        >
          {value}
        </Text>
      ))}
    </View>
  </TouchableOpacity>
);

const counterStyle = {
  width: 60,
  height: 20,
  margin: 1,
  backgroundColor: sett.color.white,
  alignItems: 'center',
  justifyContent: 'space-evenly',
  borderRadius: 3,
  flexDirection: 'row',
};

const textStyle = {
  textAlign: 'right',
  fontFamily: sett.font.montserrat.regular,
  fontSize: 10,
};
