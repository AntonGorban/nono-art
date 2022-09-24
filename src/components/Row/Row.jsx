import React from 'react';
import { View } from 'react-native';
import sett from '../../settings';

import { Cell } from '../Cell/Cell';

export const Row = ({
  row,
  color = null,
  colors = ['red', 'red', 'red'],
  cellSize,
  cellBorderRadius,
  setProgressCell = () => console.warn('setProgressCell func not found on Row.jsx component'),
}) => (
  <View style={rowStyle}>
    {row.map((cell, cellIdx) => (
      <Cell
        key={`cell.${cellIdx}`}
        cellColor={colors[cell]}
        selectedColor={color}
        cellSize={cellSize}
        cellBorderRadius={cellBorderRadius}
        onClick={() => setProgressCell(cellIdx)}
      />
    ))}
  </View>
);

const rowStyle = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};
