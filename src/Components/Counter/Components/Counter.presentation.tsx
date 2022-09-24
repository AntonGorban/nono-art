import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Color } from '../../../utils/Color';
import { FontFamily } from '../../../utils/FontFamily';

export const CounterPresentation = React.memo<Props>(
  ({ values, colors, cellSize, cellBorderRadius, bigCellSize, counterFontSize, isHorizontal, onClick }) => (
    <TouchableOpacity activeOpacity={0.7} onPress={onClick}>
      <View
        style={{
          margin: 1,
          backgroundColor: Color.white,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: isHorizontal ? bigCellSize : cellSize,
          height: isHorizontal ? cellSize : bigCellSize,
          borderRadius: cellBorderRadius,
          flexDirection: isHorizontal ? 'row' : 'column',
        }}
      >
        {values.map((value, valueIdx) => (
          <Text
            style={{
              textAlign: 'right',
              fontFamily: FontFamily.montserratAltRegular,
              fontSize: counterFontSize,
              color: colors[valueIdx],
            }}
            key={`counter.${isHorizontal ? 'row' : 'col'}.${valueIdx}`}
          >
            {value}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  )
);

/* ---------------------------------- Types --------------------------------- */

interface Props {
  readonly values: [number, number, number];
  readonly colors: [string, string, string];
  readonly cellSize: number;
  readonly cellBorderRadius: number;
  readonly bigCellSize: number;
  readonly counterFontSize: number;
  readonly isHorizontal: boolean;
  readonly onClick: () => void;
}
