import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import { Color } from '../../utils/Color';
import { CellProps } from './Cell.interface';

export const CellPresentation = React.memo<CellProps>(
  ({ cellColor, selectedColor, cellSize, cellBorderRadius, onClick }) => (
    <TouchableHighlight
      onPress={onClick}
      activeOpacity={0.3}
      underlayColor={selectedColor === cellColor ? Color.white : selectedColor}
      style={{ borderRadius: cellSize }}
    >
      <View
        style={{
          margin: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: cellColor || Color.white,
          width: cellSize,
          height: cellSize,
          borderRadius: cellBorderRadius,
        }}
      />
    </TouchableHighlight>
  )
);
