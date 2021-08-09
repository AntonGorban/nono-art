import React from "react";
import { StyleSheet, View } from "react-native";
import sett from "../../settings";

import { LevelNameDesigner } from "../../Components/LevelName/LevelNameDesigner";
import { GameGrid } from "../../Components/GameGrid/GameGrid";
import { ColorsDesigner } from "../../Components/Colors/ColorsDesigner";

export const DesignerPresentation = ({
  level,
  selectedColor,
  cellSize,
  cellBorderRadius,
  bigCellSize,
  counterFontSize,
  horizontalCounters = [[0, 0, 0]],
  verticalCounters = [[0, 0, 0]],
  setCellSize = () =>
    console.warn(
      "setCellSize func not found on DesignerPresentation.jsx component"
    ),
  setCell = () =>
    console.warn(
      "setProgressCell func not found on DesignerPresentation.jsx component"
    ),
  toColorPicker = () =>
    console.warn(
      "toColorPicker func not found on DesignerPresentation.jsx component"
    ),
  toShare = () =>
    console.warn(
      "toShare func not found on DesignerPresentation.jsx component"
    ),
  setSelectedColor = () =>
    console.warn(
      "setSelectedColor func not found on DesignerPresentation.jsx component"
    ),
  removeArtRow = () =>
    console.warn(
      "removeArtRow func not found on DesignerPresentation.jsx component"
    ),
  removeArtCol = () =>
    console.warn(
      "removeArtCol func not found on DesignerPresentation.jsx component"
    ),
  removeArtAll = () =>
    console.warn(
      "removeArtAll func not found on DesignerPresentation.jsx component"
    ),
  setName = () =>
    console.warn(
      "setName func not found on DesignerPresentation.jsx component"
    ),
  setColor = () =>
    console.warn(
      "setColor func not found on DesignerPresentation.jsx component"
    ),
  newRow = () =>
    console.warn("newRow func not found on DesignerPresentation.jsx component"),
  removeRow = () =>
    console.warn(
      "removeRow func not found on DesignerPresentation.jsx component"
    ),
  newCol = () =>
    console.warn("newCol func not found on DesignerPresentation.jsx component"),
  removeCol = () =>
    console.warn(
      "removeCol func not found on DesignerPresentation.jsx component"
    ),
}) => (
  <View style={styles.container}>
    <LevelNameDesigner
      name={level.name}
      width={level.progress[0].length}
      height={level.progress.length}
      onInput={setName}
      newRow={newRow}
      removeRow={removeRow}
      newCol={newCol}
      removeCol={removeCol}
      toShare={toShare}
    />
    <GameGrid
      level={level}
      color={level.colors[selectedColor]}
      cellSize={cellSize}
      cellBorderRadius={cellBorderRadius}
      bigCellSize={bigCellSize}
      counterFontSize={counterFontSize}
      horizontalCounters={horizontalCounters}
      verticalCounters={verticalCounters}
      setCellSize={(event) =>
        setCellSize(
          event.nativeEvent.layout.width,
          event.nativeEvent.layout.height
        )
      }
      setProgressCell={setCell}
      removeProgressRow={removeArtRow}
      removeProgressCol={removeArtCol}
      removeProgressAll={removeArtAll}
    />
    <ColorsDesigner
      colors={level.colors}
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
      setColor={setColor}
      toColorPicker={toColorPicker}
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
