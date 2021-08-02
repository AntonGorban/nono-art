import React from "react";
import { View, TouchableHighlight } from "react-native";
import sett from "../../settings";

export const Cell = ({
  cellColor = null,
  selectedColor = null,
  cellSize,
  cellBorderRadius,
  onClick = () => console.warn("onClick func not found on Cell.jsx component"),
}) => (
  <TouchableHighlight
    onPress={onClick}
    activeOpacity={0.3}
    underlayColor={
      selectedColor === cellColor ? sett.color.white : selectedColor
    }
    style={{
      borderRadius: cellSize,
    }}
  >
    <View
      style={{
        ...cellStyle,
        backgroundColor: cellColor || sett.color.white,
        width: cellSize,
        height: cellSize,
        borderRadius: cellBorderRadius,
      }}
    />
  </TouchableHighlight>
);

const cellStyle = {
  width: 20,
  height: 20,
  margin: 1,
  backgroundColor: sett.color.white,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 3,
};
