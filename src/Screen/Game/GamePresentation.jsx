import React from "react";
import { StyleSheet, View } from "react-native";
import sett from "../../settings";

import { LevelName } from "../../Components/LevelName/LevelName";
import { GameGrid } from "../../Components/GameGrid/GameGrid";
import { Colors } from "../../Components/Colors/Colors";

export const GamePresentation = ({
  level,
  selectedLevel,
  selectedColor,
  cellSize = 20,
  setCellSize = () =>
    console.warn(
      "setCellSize func not found on GamePresentation.jsx component"
    ),
  setProgressCell = () =>
    console.warn(
      "setProgressCell func not found on GamePresentation.jsx component"
    ),
  setSelectedColor = () =>
    console.warn(
      "setSelectedColor func not found on GamePresentation.jsx component"
    ),
  removeProgressRow = () =>
    console.warn(
      "removeProgressRow func not found on GamePresentation.jsx component"
    ),
  removeProgressCol = () =>
    console.warn(
      "removeProgressCol func not found on GamePresentation.jsx component"
    ),
  removeProgressAll = () =>
    console.warn(
      "removeProgressAll func not found on GamePresentation.jsx component"
    ),
}) => (
  <View style={styles.container}>
    <LevelName id={selectedLevel} name={level.name} />
    <GameGrid
      level={level}
      color={level.colors[selectedColor]}
      cellSize={cellSize}
      setCellSize={setCellSize}
      setProgressCell={setProgressCell}
      removeProgressRow={removeProgressRow}
      removeProgressCol={removeProgressCol}
      removeProgressAll={removeProgressAll}
    />
    <Colors
      colors={level.colors}
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: sett.color.black,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 35,
    textAlign: "center",
    paddingVertical: 15,
    color: sett.color.white,
  },
});
