// General
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button, Alert, StatusBar } from "react-native";
import { connect, Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import sett from "./src/settings";

// Screens
import { Main } from "./src/Screen/Main";
import { Levels } from "./src/Screen/Levels";
import { Game } from "./src/Screen/Game";
import { Designer } from "./src/Screen/Designer";
import { ColorPicker } from "./src/GameGrid/ColorPicker";
import { LevelJSON } from "./src/GameGrid/LevelJSON";
import { About } from "./src/Screen/About";

// Storage
import { storage, getLevelsFromRepo } from "./src/storage";

// Для навигатора, используется только здесь
const Stack = createStackNavigator();

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    storage.getObj("levels").then((data) => {
      if (data !== null) {
        // setLevels(data);
      }
    });

    storage.getObj("selectedLevel").then((data) => {
      if (data !== null) {
        // setSelectedLevel(data);
      }
    });

    //   getLevelsFromRepo().then((repoLevels) => {
    //     storage.getObj("levels").then((localLevels) => {
    //       if (repoLevels.length > localLevels.length) {
    //         for (let i = localLevels.length; i < repoLevels.length; i++) {
    //           localLevels.push(repoLevels[i]);
    //         }
    //         updateLevels(localLevels);
    //       }
    //     });
    //   });
  }

  render() {
    return (
      <NavigationContainer>
        {/* Context.Provider value={{
            colorPickerProps,
            setColorPickerProps,
            levelJSONText,
            setLevelJSONText,
            levels,
            selectedLevel,
            updateSelectedLevel,
            progress,
            setProgress,
            updateProgress,
          }} */}
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
          <Stack.Screen
            name="About"
            component={About}
            options={headerOptions}
          />
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
  }
}

// Погнал Redux и ебля с ним, ну и шрифты
const mapStateToProps = (state) => ({
  levels: state.levels,
});

const mapDispatchToProps = (dispatch) => ({});

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

import store from "./src/redux/store";
global.store = store;

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default () => {
  const [fontsLoaded] = Font.useFonts({
    "Montserrat-Alternates-light": require("./src/assets/fonts/MontserratAlternates-Light.otf"),
    "Montserrat-Alternates-regular": require("./src/assets/fonts/MontserratAlternates-Regular.otf"),
    "Montserrat-Alternates-bold": require("./src/assets/fonts/MontserratAlternates-Bold.otf"),
    "Fredericka-the-Great": require("./src/assets/fonts/FrederickatheGreat-Regular.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

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
