import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

import { Color } from '../../utils/Color';
import { CellProps } from './Cell.interface';

export const CellAndroidPresentation = React.memo<CellProps>(
  ({ cellColor, selectedColor, cellSize, cellBorderRadius, onClick }) => (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(selectedColor === cellColor ? Color.white : selectedColor, true)}
      onPress={onClick}
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
    </TouchableNativeFeedback>
  )
);
