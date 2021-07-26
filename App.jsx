// General
import "react-native-gesture-handler";
import React from "react";
// Storage
import { storage, getLevelsFromRepo } from "./src/storage";
// Presentation clear component
import { AppPresentation } from "./AppPresentation";

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
    // Context.Provider value={{
    //   colorPickerProps,
    //   setColorPickerProps,
    //   levelJSONText,
    //   setLevelJSONText,
    //   levels,
    //   selectedLevel,
    //   updateSelectedLevel,
    //   progress,
    //   setProgress,
    //   updateProgress,
    // }}
    return <AppPresentation />;
  }
}

// Погнал Redux и ебля с ним, ну и шрифты
// General
import { connect, Provider } from "react-redux";
import store from "./src/redux/store";
global.store = store;
// Fonts
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const mapStateToProps = (state) => ({
  levels: state.levels,
});

const mapDispatchToProps = (dispatch) => ({});

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

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
