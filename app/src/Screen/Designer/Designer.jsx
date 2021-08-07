import React from "react";
import { connect } from "react-redux";
import { Alert } from "react-native";

import { DesignerPresentation } from "./DesignerPresentation";

class DesignerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.setName = (name) => props.setName(name);
    this.setCell = (row, col) => props.setCell(row, col);
    this.setColor = (idx, color) => props.setColor(idx, color);
    console.log(props);
    this.toColorPicker = (selectedColor) => {
      props.setSelectedColor(selectedColor);
      props.navigation.navigate("ColorPicker");
    };
    this.setSelectedColor = (selectedColor) =>
      props.setSelectedColor(selectedColor);
    this.newRow = () => props.newRow();
    this.removeRow = () => props.removeRow();
    this.newCol = () => props.newCol();
    this.removeCol = () => props.removeCol();
    this.removeArtRow = (row) =>
      this.removeArtAlert(
        `Вы точно хотите очистить строку № ${row + 1}?`,
        "Очистка строки",
        () => props.removeArtRow(row)
      );
    this.removeArtCol = (col) =>
      this.removeArtAlert(
        "Очистка колонки",
        `Вы точно хотите очистить колонку № ${col + 1}?`,
        () => props.removeArtCol(col)
      );
    this.removeArtAll = () =>
      this.removeArtAlert(
        "Очистка поля",
        `Вы точно хотите очистить все игровое поле?`,
        () => props.removeArtAll()
      );

    this.state = {
      cellSize: 20,
      cellBorderRadius: Math.floor(20 / 5),
      bigCellSize: 20 * 2.6 - 4,
      counterFontSize: Math.floor(20 / 2),
    };
  }

  removeArtAlert = (title, massage, cbFunc) =>
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

  width = 100;
  height = 100;
  setCellSize = (width = null, height = null) => {
    width === null ? (width = this.width) : (this.width = width);
    height === null ? (height = this.height) : (this.height = height);
    const size =
      Math.min(
        Math.floor(width / (this.props.art[0].length + 2.5)),
        Math.floor(height / (this.props.art.length + 2.5))
      ) - 2;
    console.log("cellSize = ", size);
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
      i < (horizontal ? this.props.art.length : this.props.art[0].length);
      i++
    ) {
      let counterValue = [0, 0, 0];
      for (
        let j = 0;
        j < (horizontal ? this.props.art[0].length : this.props.art.length);
        j++
      ) {
        this.props.art[horizontal ? i : j][horizontal ? j : i] !== null &&
          counterValue[
            this.props.art[horizontal ? i : j][horizontal ? j : i]
          ]++;
      }
      accumulator.push(counterValue);
    }
    return accumulator;
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.art.length !== this.props.art.length ||
      prevProps.art[0].length !== this.props.art[0].length
    ) {
      this.setCellSize();
    }
  }

  render() {
    return (
      <DesignerPresentation
        level={{
          colors: this.props.colors,
          progress: this.props.art,
          name: this.props.name,
        }}
        selectedColor={this.props.selectedColor}
        cellSize={this.state.cellSize}
        cellBorderRadius={this.state.cellBorderRadius}
        bigCellSize={this.state.bigCellSize}
        counterFontSize={this.state.counterFontSize}
        horizontalCounters={this.accumulateCountersValues(true)}
        verticalCounters={this.accumulateCountersValues(false)}
        setCellSize={this.setCellSize}
        setCell={this.setCell}
        toColorPicker={this.toColorPicker}
        setSelectedColor={this.setSelectedColor}
        removeArtRow={this.removeArtRow}
        removeArtCol={this.removeArtCol}
        removeArtAll={this.removeArtAll}
        setName={this.setName}
        setColor={this.setColor}
        newRow={this.newRow}
        removeRow={this.removeRow}
        newCol={this.newCol}
        removeCol={this.removeCol}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.designer.name,
  colors: state.designer.colors,
  selectedColor: state.designer.selectedColor,
  art: state.designer.art,
});

import {
  setNameAC,
  setCellAC,
  setColorAC,
  setSelectedColorAC,
  newRowAC,
  removeRowAC,
  newColAC,
  removeColAC,
  removeArtRowAC,
  removeArtColAC,
  removeArtAllAC,
} from "../../redux/designerReducer";

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(setNameAC(name)),
  setCell: (row, col) => dispatch(setCellAC(row, col)),
  setColor: (idx, color) => dispatch(setColorAC(idx, color)),
  setSelectedColor: (selectedColor) =>
    dispatch(setSelectedColorAC(selectedColor)),
  newRow: () => dispatch(newRowAC()),
  removeRow: () => dispatch(removeRowAC()),
  newCol: () => dispatch(newColAC()),
  removeCol: () => dispatch(removeColAC()),
  removeArtRow: (row) => dispatch(removeArtRowAC(row)),
  removeArtCol: (col) => dispatch(removeArtColAC(col)),
  removeArtAll: () => dispatch(removeArtAllAC()),
});

export const Designer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DesignerContainer);
