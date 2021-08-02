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

    this.state = {
      cellSize: 20,
      cellBorderRadius: Math.floor(20 / 5),
      bigCellSize: 20 * 2.6 - 4,
      counterFontSize: Math.floor(20 / 2),
    };
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

  setCellSize = (event) => {
    const size =
      Math.min(
        Math.floor(
          event.nativeEvent.layout.width / (this.props.level.width + 2.5)
        ),
        Math.floor(
          event.nativeEvent.layout.height / (this.props.level.height + 2.5)
        )
      ) - 2;
    console.log("setCellSize");
    this.setState({
      cellSize: size,
      cellBorderRadius: Math.floor(size / 5),
      bigCellSize: size * 2.6 - 4,
      counterFontSize: Math.floor(size / 2),
    });
  };

  accumulateCountersValues = (horizontal) => {
    const accumulator = [];
    for (
      let i = 0;
      i <
      (horizontal
        ? this.props.level.art.length
        : this.props.level.art[0].length);
      i++
    ) {
      let counterValue = [0, 0, 0];
      for (
        let j = 0;
        j <
        (horizontal
          ? this.props.level.art[0].length
          : this.props.level.art.length);
        j++
      ) {
        this.props.level.art[horizontal ? i : j][horizontal ? j : i] !== null &&
          counterValue[
            this.props.level.art[horizontal ? i : j][horizontal ? j : i]
          ]++;
        this.props.level.progress[horizontal ? i : j][horizontal ? j : i] !==
          null &&
          counterValue[
            this.props.level.progress[horizontal ? i : j][horizontal ? j : i]
          ]--;
      }
      accumulator.push(counterValue);
    }
    return accumulator;
  };

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <GamePresentation
        level={this.props.level}
        selectedLevel={this.props.selectedLevel}
        selectedColor={this.props.selectedColor}
        cellSize={this.state.cellSize}
        cellBorderRadius={this.state.cellBorderRadius}
        bigCellSize={this.state.bigCellSize}
        counterFontSize={this.state.counterFontSize}
        horizontalCounters={this.accumulateCountersValues(true)}
        verticalCounters={this.accumulateCountersValues(false)}
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
