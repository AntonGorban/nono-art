import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import sett from "../../settings";

import clearImg from "../../assets/img/redo.png";

export const ClearButton = ({
  cellSize = 20,
  onClick = () =>
    console.warn("onClick func not found on ClearButton.jsx component"),
}) => (
  <TouchableOpacity activeOpacity={0.7} onPress={onClick}>
    <View
      style={{
        ...containerStyle,
        width: cellSize * 2.6 - 4,
        height: cellSize * 2.6 - 4,
        borderRadius: Math.floor(cellSize / 5),
        borderTopLeftRadius: cellSize,
      }}
    >
      <Image style={styles.image} source={clearImg} />
    </View>
  </TouchableOpacity>
);

const containerStyle = {
  backgroundColor: sett.color.white,
  margin: 1,
  borderRadius: 3,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create({
  image: {
    height: "70%",
    width: "70%",
  },
});
