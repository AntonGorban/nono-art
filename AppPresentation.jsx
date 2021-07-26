// General
import React from "react";
import { StyleSheet, Text, View, Button, Alert, StatusBar } from "react-native";
import sett from "./src/settings";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// Screens
import { Main } from "./src/Screen/Main";
import { Levels } from "./src/Screen/Levels";
import { Game } from "./src/Screen/Game";
import { Designer } from "./src/Screen/Designer";
import { ColorPicker } from "./src/GameGrid/ColorPicker";
import { LevelJSON } from "./src/GameGrid/LevelJSON";
import { About } from "./src/Screen/About";
// Для навигатора, используется только здесь
const Stack = createStackNavigator();

export const AppPresentation = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="float">
        <Stack.Screen name="Main" component={Main} options={headerOptions} />
        <Stack.Screen
          name="Levels"
          component={Levels}
          options={headerOptions}
        />
        <Stack.Screen name="Game" component={Game} options={headerOptions} />
        <Stack.Screen
          name="Designer"
          component={Designer}
          options={headerOptions}
        />
        <Stack.Screen
          name="ColorPicker"
          component={ColorPicker}
          options={headerOptions}
        />
        <Stack.Screen name="About" component={About} options={headerOptions} />
        <Stack.Screen
          name="LevelJSON"
          component={LevelJSON}
          options={headerOptions}
        />
      </Stack.Navigator>
      <StatusBar
        barStyle="light-content"
        backgroundColor={sett.color.darkBlack}
        translucent={false}
      />
    </NavigationContainer>
  );
};

// Настройка header
const headerOptions = {
  title: "nonoArt",
  headerStyle: {
    backgroundColor: sett.color.darkBlack,
    borderColor: sett.color.white,
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  headerTitleAlign: "center",
  headerTintColor: sett.color.white,
  headerTitleStyle: {
    fontSize: 30,
    color: "#fefefe",
    fontFamily: sett.font.fredericka,
    textAlign: "center",
  },
};
