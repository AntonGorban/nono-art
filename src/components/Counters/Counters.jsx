import React from 'react';
import { View } from 'react-native';
import sett from '../../settings';

import { Counter } from '../Counter/Counter';

export const Counters = ({
  counters = [[0, 0, 0]],
  colors = [sett.color.dark, sett.color.dark, sett.color.dark],
  cellSize,
  cellBorderRadius,
  bigCellSize,
  counterFontSize,
  horizontal = true,
  onClick = () => console.warn('onClick func not found on Counters.jsx component'),
}) => (
  <View style={{ flexDirection: horizontal ? 'column' : 'row' }}>
    {counters.map((values, counterIdx) => (
      <Counter
        key={`counter.${horizontal ? 'row' : 'col'}.${counterIdx}`}
        values={values}
        colors={colors}
        cellSize={cellSize}
        cellBorderRadius={cellBorderRadius}
        bigCellSize={bigCellSize}
        counterFontSize={counterFontSize}
        horizontal={horizontal}
        counterIdx={counterIdx}
        onClick={() => onClick(counterIdx)}
      />
    ))}
  </View>
);
