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
    this.levels = props.levels;
    this.selectedLevel = props.selectedLevel;
    this.setLevels = props.setLevels;
    this.pushNewLevels = props.pushNewLevels;
    this.setSelectedLevel = props.setSelectedLevel;
  }

  async componentDidMount() {
    await Promise.all([
      storage
        .getObj("levels")
        .then((data) => data !== null && this.setLevels(data)),

      storage
        .getObj("selectedLevel")
        .then((data) =>
          data !== null
            ? this.setSelectedLevel(data)
            : storage.setObj("selectedLevel", this.selectedLevel)
        ),
    ]);

    await getLevelsFromRepo().then((repoLevels) => {
      if (repoLevels.length > this.levels.length) {
        let newLevels = [];
        for (let i = this.levels.length; i < repoLevels.length; i++) {
          newLevels.push(repoLevels[i]);
        }
        this.pushNewLevels(newLevels);
        console.log("getLevelsFromRepo", newLevels);
      }
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.levels = this.props.levels;
    this.selectedLevel = this.props.selectedLevel;
    console.log(this.levels);
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
  levels: state.levels.levels,
  selectedLevel: state.levels.selectedLevel,
});

import {
  setLevelsAC,
  pushNewLevelsAC,
  setSelectedLevelAC,
} from "./src/redux/levelsReducer";

const mapDispatchToProps = (dispatch) => ({
  setLevels: (levels) => dispatch(setLevelsAC(levels)),
  pushNewLevels: (levels) => dispatch(pushNewLevelsAC(levels)),
  setSelectedLevel: (selectedLevel) =>
    dispatch(setSelectedLevelAC(selectedLevel)),
});

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
