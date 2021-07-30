import React from "react";
import { connect } from "react-redux";
import { Alert } from "react-native";

import { GamePresentation } from "./GamePresentation";

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.setProgressCell = (row, col) =>
      props.setProgressCell(props.selectedLevel, row, col);
    this.setSelectedColor = props.setSelectedColor;
    this.removeProgressRow = (row) =>
      this.removeProgressAlert(
        `Вы точно хотите очистить строку № ${row + 1}?`,
        "Очистка строки",
        () => props.removeProgressRow(props.selectedLevel, row)
      );
    this.removeProgressCol = (col) =>
      this.removeProgressAlert(
        "Очистка колонки",
        `Вы точно хотите очистить колонку № ${col + 1}?`,
        () => props.removeProgressCol(props.selectedLevel, col)
      );
    this.removeProgressAll = () =>
      this.removeProgressAlert(
        "Очистка поля",
        `Вы точно хотите очистить все игровое поле?`,
        () => props.removeProgressAll(props.selectedLevel)
      );

    this.state = { cellSize: 20 };
  }

  removeProgressAlert = (title, massage, cbFunc) =>
    Alert.alert(
      title,
      massage,
      [
        {
          text: "Нет, оставить",
        },
        {
          text: "Да, очистить",
          onPress: cbFunc,
        },
      ],
      { cancelable: true }
    );

  setCellSize = (event) =>
    this.setState({
      cellSize:
        Math.min(
          Math.floor(
            event.nativeEvent.layout.width / (this.props.level.width + 2.5)
          ),
          Math.floor(
            event.nativeEvent.layout.height / (this.props.level.height + 2.5)
          )
        ) - 2,
    });

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <GamePresentation
        level={this.props.level}
        selectedLevel={this.props.selectedLevel}
        selectedColor={this.props.selectedColor}
        cellSize={this.state.cellSize}
        setCellSize={this.setCellSize}
        setProgressCell={this.setProgressCell}
        setSelectedColor={this.setSelectedColor}
        removeProgressRow={this.removeProgressRow}
        removeProgressCol={this.removeProgressCol}
        removeProgressAll={this.removeProgressAll}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  level: state.levels.levels[state.levels.selectedLevel],
  selectedLevel: state.levels.selectedLevel,
  selectedColor: state.levels.selectedColor,
});

import {
  setProgressCellAC,
  setSelectedColorAC,
  removeProgressRowAC,
  removeProgressColAC,
  removeProgressAllAC,
} from "../../redux/levelsReducer";

const mapDispatchToProps = (dispatch) => ({
  setProgressCell: (id, row, col) => dispatch(setProgressCellAC(id, row, col)),
  setSelectedColor: (selectedColor) =>
    dispatch(setSelectedColorAC(selectedColor)),
  removeProgressRow: (id, row) => dispatch(removeProgressRowAC(id, row)),
  removeProgressCol: (id, col) => dispatch(removeProgressColAC(id, col)),
  removeProgressAll: (id) => dispatch(removeProgressAllAC(id)),
});

export const Game = connect(mapStateToProps, mapDispatchToProps)(GameContainer);
