// General
import React from "react";
import { StyleSheet, Text, View, Button, Alert, StatusBar } from "react-native";
import sett from "./src/settings";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// Screens
import { Main } from "./src/Screen/Main/Main";
import { Levels } from "./src/Screen/Levels/Levels";
import { Game } from "./src/Screen/Game/Game";
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
        {[
          { name: "Main", component: Main },
          { name: "Levels", component: Levels },
          { name: "Game", component: Game },
          { name: "Designer", component: Designer },
          { name: "ColorPicker", component: ColorPicker },
          { name: "About", component: About },
          { name: "LevelJSON", component: LevelJSON },
        ].map((screen) => (
          <Stack.Screen
            key={`screen-${screen.name}`}
            name={screen.name}
            component={screen.component}
            options={headerOptions}
          />
        ))}
      </Stack.Navigator>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={sett.color.dark}
        translucent={false}
      />
    </NavigationContainer>
  );
};

// Настройка header
const headerOptions = {
  title: "nonoArt",
  headerStyle: {
    backgroundColor: sett.color.dark,
    borderColor: sett.color.white,
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  headerTitleAlign: "center",
  headerTintColor: sett.color.white,
  headerTitleStyle: {
    fontSize: 35,
    color: "#fefefe",
    fontFamily: sett.font.fredericka,
    textAlign: "center",
  },
};
