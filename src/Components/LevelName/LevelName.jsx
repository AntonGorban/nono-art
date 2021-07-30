import React from "react";
import { View, Text, StyleSheet } from "react-native";
import sett from "../../settings";

export const LevelName = ({ id = 0, name = "" }) => (
  <View style={styles.container}>
    <Text style={styles.id}> {`уровень № ${id + 1}`} </Text>
    <Text style={styles.name}> {name} </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  id: {
    color: sett.color.white,
    fontSize: 16,
    fontFamily: sett.font.montserrat.light,
    textAlign: "center",
  },
  name: {
    color: sett.color.white,
    fontSize: 20,
    fontFamily: sett.font.montserrat.bold,
    textAlign: "center",
  },
});
