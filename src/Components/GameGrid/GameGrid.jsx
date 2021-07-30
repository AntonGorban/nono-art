import React from "react";
import { View } from "react-native";
import sett from "../../settings";

import { Row } from "../../Components/Row/Row";
import { Counters } from "../../Components/Counters/Counters";
import { ClearButton } from "../../Components/ClearButton/ClearButton";

const accumulateCountersValues = (horizontal, art, progress) => {
  const accumulator = [];
  for (let i = 0; i < (horizontal ? art.length : art[0].length); i++) {
    let counterValue = [0, 0, 0];
    for (let j = 0; j < (horizontal ? art[0].length : art.length); j++) {
      art[horizontal ? i : j][horizontal ? j : i] !== null &&
        counterValue[art[horizontal ? i : j][horizontal ? j : i]]++;
      progress[horizontal ? i : j][horizontal ? j : i] !== null &&
        counterValue[progress[horizontal ? i : j][horizontal ? j : i]]--;
    }
    accumulator.push(counterValue);
  }
  return accumulator;
};

export const GameGrid = ({
  level,
  color = null,
  cellSize = 20,
  setCellSize = () =>
    console.warn("setCellSize func not found on GameGrid.jsx component"),
  setProgressCell = () =>
    console.warn("setProgressCell func not found on GameGrid.jsx component"),
  removeProgressRow = () =>
    console.warn("removeProgressRow func not found on GameGrid.jsx component"),
  removeProgressCol = () =>
    console.warn("removeProgressCol func not found on GameGrid.jsx component"),
  removeProgressAll = () =>
    console.warn("removeProgressAll func not found on GameGrid.jsx component"),
}) => {
  let horizontalCounters = accumulateCountersValues(
    true,
    level.art,
    level.progress
  );
  let verticalCounters = accumulateCountersValues(
    false,
    level.art,
    level.progress
  );

  return (
    <View style={wrapStyle} onLayout={setCellSize}>
      <View style={containerStyle}>
        <ClearButton cellSize={cellSize} onClick={removeProgressAll} />
        <Counters
          onClick={removeProgressCol}
          horizontal={false}
          cellSize={cellSize}
          colors={level.colors}
          counters={verticalCounters}
        />
      </View>
      <View style={containerStyle}>
        <Counters
          counters={horizontalCounters}
          colors={level.colors}
          cellSize={cellSize}
          horizontal={true}
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
              setProgressCell={(cellIdx) => setProgressCell(rowIdx, cellIdx)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const wrapStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

const containerStyle = {
  flexDirection: "row",
};
