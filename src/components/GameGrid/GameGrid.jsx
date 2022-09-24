import React from 'react';
import { View } from 'react-native';
import sett from '../../settings';

import { Row } from '../Row/Row';
import { Counters } from '../Counters/Counters';
import { ClearButton } from '../ClearButton/ClearButton';

export const GameGrid = ({
  level,
  color = null,
  cellSize,
  cellBorderRadius,
  bigCellSize,
  counterFontSize,
  horizontalCounters = [[0, 0, 0]],
  verticalCounters = [[0, 0, 0]],
  setCellSize = () => console.warn('setCellSize func not found on GameGrid.jsx component'),
  setProgressCell = () => console.warn('setProgressCell func not found on GameGrid.jsx component'),
  removeProgressRow = () => console.warn('removeProgressRow func not found on GameGrid.jsx component'),
  removeProgressCol = () => console.warn('removeProgressCol func not found on GameGrid.jsx component'),
  removeProgressAll = () => console.warn('removeProgressAll func not found on GameGrid.jsx component'),
}) => (
  <View style={wrapStyle} onLayout={setCellSize}>
    <View style={containerStyle}>
      <ClearButton
        cellSize={cellSize}
        bigCellSize={bigCellSize}
        cellBorderRadius={cellBorderRadius}
        onClick={removeProgressAll}
      />
      <Counters
        onClick={removeProgressCol}
        horizontal={false}
        cellSize={cellSize}
        cellBorderRadius={cellBorderRadius}
        bigCellSize={bigCellSize}
        counterFontSize={counterFontSize}
        colors={level.colors}
        counters={verticalCounters}
      />
    </View>
    <View style={containerStyle}>
      <Counters
        counters={horizontalCounters}
        colors={level.colors}
        cellSize={cellSize}
        cellBorderRadius={cellBorderRadius}
        bigCellSize={bigCellSize}
        counterFontSize={counterFontSize}
        bigCellSize={bigCellSize}
        cellBorderRadius={cellBorderRadius}
        horizontal
        onClick={removeProgressRow}
      />
      <View>
        {level.progress.map((row, rowIdx) => (
          <Row
            key={`row.${rowIdx}`}
            row={row}
            color={color}
            colors={level.colors}
            cellSize={cellSize}
            cellBorderRadius={cellBorderRadius}
            setProgressCell={(cellIdx) => setProgressCell(rowIdx, cellIdx)}
          />
        ))}
      </View>
    </View>
  </View>
);

const wrapStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
};

const containerStyle = {
  flexDirection: 'row',
};
