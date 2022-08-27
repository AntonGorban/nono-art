import React from "react";
import { View, StyleSheet } from "react-native";
import sett from "../../settings";

import { Color } from "../Color/Color";

export const Colors = ({
  colors = ["red", "red", "red"],
  selectedColor = null,
  setSelectedColor = () =>
    console.warn("setSelectedColor func not found on Colors.jsx component"),
}) => (
  <View style={styles.container}>
    <Color
      color={colors[0]}
      onClick={() => setSelectedColor(0)}
      isSelected={selectedColor === 0}
    />
    <Color
      color={colors[1]}
      onClick={() => setSelectedColor(1)}
      isSelected={selectedColor === 1}
    />
    <Color
      color={colors[2]}
      onClick={() => setSelectedColor(2)}
      isSelected={selectedColor === 2}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: sett.color.white,
    height: 90,
    width: "100%",
    borderTopLeftRadius: 65,
    borderTopRightRadius: 65,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
