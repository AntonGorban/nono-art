const SET_DESIGNER_STATE = "SET-DESIGNER-STATE";
const SET_NAME = "SET-NAME";
const SET_CELL = "SET-CELL";
const SET_COLOR = "SET-COLOR";
const PICK_COLOR = "PICK-COLOR";
const SET_SELECTED_COLOR = "SET-SELECTED-COLOR";
const NEW_ROW = "NEW-ROW";
const REMOVE_ROW = "REMOVE-ROW";
const NEW_COL = "NEW-COL";
const REMOVE_COL = "REMOVE-COL";
const REMOVE_ART_ROW = "REMOVE-ART-ROW";
const REMOVE_ART_COL = "REMOVE-ART-COL";
const REMOVE_ART_ALL = "REMOVE-ART-ALL";

import { storage } from "../storage";

const initialState = {
  name: "",
  colors: ["#FF0000", "#00FF00", "#0000FF"],
  selectedColor: 1,
  art: [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ],
};

const designerReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case SET_DESIGNER_STATE:
      storage.setObj("designer", { ...prevState, ...action.state });
      return { ...prevState, ...action.state };

    case SET_NAME:
      var name = action.name
        .replace(/[^\wа-яё\s\d\-]/gim, "")
        .replace(/(\s\s)/gim, " ")
        .replace(/(\-\-)/gim, " ")
        .substring(0, 25);
      storage.setObj("designer", { ...prevState, name });
      return { ...prevState, name };

    case SET_CELL:
      var art = prevState.art.map((row, rowIdx) =>
        rowIdx !== action.row
          ? row
          : row.map((col, colIdx) =>
              colIdx !== action.col
                ? col
                : col !== prevState.selectedColor
                ? prevState.selectedColor
                : null
            )
      );
      storage.setObj("designer", { ...prevState, art });
      return { ...prevState, art };

    case SET_COLOR:
      var colors = prevState.colors.map((color, idx) =>
        idx !== action.idx
          ? color
          : `#${action.color
              .replace(/[^\dabcdef]/gim, "")
              .substring(0, 6)
              .toUpperCase()}`
      );
      storage.setObj("designer", { ...prevState, colors });
      return { ...prevState, colors };

    case PICK_COLOR:
      var colors = prevState.colors.map((color, idx) =>
        idx !== prevState.selectedColor ? color : action.color.toUpperCase()
      );
      storage.setObj("designer", { ...prevState, colors });
      return { ...prevState, colors };

    case SET_SELECTED_COLOR:
      return { ...prevState, selectedColor: action.selectedColor };

    case NEW_ROW:
      return {
        ...prevState,
        art:
          prevState.art.length < 25
            ? [...prevState.art, Array(prevState.art[0].length).fill(null)]
            : prevState.art,
      };

    case REMOVE_ROW:
      return {
        ...prevState,
        art:
          prevState.art.length > 3 ? prevState.art.slice(0, -1) : prevState.art,
      };

    case NEW_COL:
      return {
        ...prevState,
        art:
          prevState.art[0].length < 20
            ? prevState.art.map((row) => [...row, null])
            : prevState.art,
      };

    case REMOVE_COL:
      return {
        ...prevState,
        art:
          prevState.art[0].length > 3
            ? prevState.art.map((row) => row.slice(0, -1))
            : prevState.art,
      };

    case REMOVE_ART_ROW:
      return {
        ...prevState,
        art: prevState.art.map((row, idx) =>
          idx !== action.row ? row : row.map((col, colIdx) => null)
        ),
      };

    case REMOVE_ART_COL:
      return {
        ...prevState,
        art: prevState.art.map((row, rowIdx) =>
          row.map((col, colIdx) => (colIdx !== action.col ? col : null))
        ),
      };

    case REMOVE_ART_ALL:
      return {
        ...prevState,
        art: prevState.art.map((row, rowIdx) => row.map((col, colIdx) => null)),
      };

    default:
      return prevState;
  }
};

export default designerReducer;

export const setDesignerStateAC = (state) => ({
  type: SET_DESIGNER_STATE,
  state,
});
export const setNameAC = (name) => ({ type: SET_NAME, name });
export const setCellAC = (row, col) => ({ type: SET_CELL, row, col });
export const setColorAC = (idx, color) => ({ type: SET_COLOR, idx, color });
export const pickColorAC = (color) => ({ type: PICK_COLOR, color });
export const setSelectedColorAC = (selectedColor) => ({
  type: SET_SELECTED_COLOR,
  selectedColor,
});
export const newRowAC = () => ({ type: NEW_ROW });
export const removeRowAC = () => ({ type: REMOVE_ROW });
export const newColAC = () => ({ type: NEW_COL });
export const removeColAC = () => ({ type: REMOVE_COL });
export const removeArtRowAC = (row) => ({ type: REMOVE_ART_ROW, row });
export const removeArtColAC = (col) => ({ type: REMOVE_ART_COL, col });
export const removeArtAllAC = () => ({ type: REMOVE_ART_ALL });
