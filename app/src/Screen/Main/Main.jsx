import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import sett from "../../settings.js";

export const Main = ({ navigation }) => (
  <View style={styles.container}>
    {[
      { text: "Уровни", to: "Levels" },
      { text: "Продолжить", to: "Game" },
      { text: "Рисовать", to: "Designer" },
      { text: "О игре", to: "About" },
    ].map((link) => (
      <TouchableHighlight
        key={`link-to.${link.to}`}
        activeOpacity={1}
        underlayColor={sett.color.dark}
        style={styles.buttonContainer}
        onPress={() => navigation.navigate(link.to)}
      >
        <View>
          <Text style={styles.buttonText}>{link.text}</Text>
        </View>
      </TouchableHighlight>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: sett.color.black,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 25,
  },
  buttonContainer: {
    width: "80%",
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: sett.color.white,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: sett.color.white,
    fontFamily: sett.font.montserrat.regular,
    textTransform: "uppercase",
  },
});
