import React from "react";
import { connect } from "react-redux";
import { LevelsPresentation } from "./LevelsPresentation";

class LevelsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.levels = props.levels;
    this.selectedLevel = props.selectedLevel;
    this.startLevel = (selectedLevel) => {
      props.setSelectedLevel(selectedLevel);
      props.navigation.navigate("Game");
    };
  }

  render() {
    return (
      <LevelsPresentation levels={this.levels} startLevel={this.startLevel} />
    );
  }
}

const mapStateToProps = (state) => ({
  levels: state.levels.levels,
  selectedLevel: state.levels.selectedLevel,
});

import { setSelectedLevelAC } from "../../redux/levelsReducer";

const mapDispatchToProps = (dispatch) => ({
  setSelectedLevel: (selectedLevel) =>
    dispatch(setSelectedLevelAC(selectedLevel)),
});

export const Levels = connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelsContainer);
