const SET_LEVELS = "SET-LEVELS";
const PUSH_NEW_LEVELS = "PUSH-NEW-LEVELS";
const SET_SELECTED_LEVEL = "SET-SELECTED-LEVEL";
const SET_SELECTED_COLOR = "SET-SELECTED-COLOR";
const SET_PROGRESS_CELL = "SET-PROGRESS-CELL";
const REMOVE_PROGRESS_ROW = "REMOVE-PROGRESS-ROW";
const REMOVE_PROGRESS_COL = "REMOVE-PROGRESS-COL";
const REMOVE_PROGRESS_ALL = "REMOVE-PROGRESS-ALL";

import { storage } from "../storage";

const initialState = {
  levels: [
    {
      name: "Сердечко",
      width: 10,
      height: 10,
      colors: ["#000a12", "#ff1744", "#ffab00"],
      art: [
        [null, 0, 0, 0, null, null, 0, 0, 0, null],
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 2, 1, 1, 2, 1, 1, 0],
        [0, 1, 1, 1, 2, 2, 1, 1, 1, 0],
        [0, 1, 1, 2, 2, 2, 2, 1, 1, 0],
        [null, 0, 1, 1, 2, 2, 1, 1, 0, null],
        [null, null, 0, 1, 1, 1, 1, 0, null, null],
        [null, null, null, 0, 1, 1, 0, null, null, null],
        [null, null, null, null, 0, 0, null, null, null, null],
      ],
      progress: [
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
    },
  ],
  selectedLevel: 0,
  selectedColor: 1,
};

const levelsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case SET_LEVELS:
      storage.setObj("levels", action.levels);
      return { ...prevState, levels: action.levels };

    case PUSH_NEW_LEVELS:
      storage.setObj("levels", [...prevState.levels, ...action.levels]);
      return { ...prevState, levels: [...prevState.levels, ...action.levels] };

    case SET_SELECTED_LEVEL:
      storage.setObj("selectedLevel", action.selectedLevel);
      return { ...prevState, selectedLevel: action.selectedLevel };

    case SET_SELECTED_COLOR:
      return { ...prevState, selectedColor: action.selectedColor };

    case SET_PROGRESS_CELL:
      const levels = prevState.levels.map((level, levelIdx) =>
        levelIdx !== action.id
          ? level
          : {
              ...level,
              progress: level.progress.map((row, rowIdx) =>
                rowIdx !== action.row
                  ? row
                  : row.map((col, colIdx) =>
                      colIdx !== action.col
                        ? col
                        : col !== prevState.selectedColor
                        ? prevState.selectedColor
                        : null
                    )
              ),
            }
      );
      storage.setObj("levels", levels);
      return { ...prevState, levels };

    case REMOVE_PROGRESS_ROW:
      return {
        ...prevState,
        levels: prevState.levels.map((level, levelIdx) =>
          levelIdx !== action.id
            ? level
            : {
                ...level,
                progress: level.progress.map((row, rowIdx) =>
                  rowIdx !== action.row ? row : row.map((col, colIdx) => null)
                ),
              }
        ),
      };

    case REMOVE_PROGRESS_COL:
      return {
        ...prevState,
        levels: prevState.levels.map((level, levelIdx) =>
          levelIdx !== action.id
            ? level
            : {
                ...level,
                progress: level.progress.map((row, rowIdx) =>
                  row.map((col, colIdx) => (colIdx !== action.col ? col : null))
                ),
              }
        ),
      };

    case REMOVE_PROGRESS_ALL:
      return {
        ...prevState,
        levels: prevState.levels.map((level, levelIdx) =>
          levelIdx !== action.id
            ? level
            : {
                ...level,
                progress: level.progress.map((row, rowIdx) =>
                  row.map((col, colIdx) => null)
                ),
              }
        ),
      };

    default:
      return prevState;
  }
};

export default levelsReducer;

export const setLevelsAC = (levels = initialState.levels) => ({
  type: SET_LEVELS,
  levels,
});

export const pushNewLevelsAC = (levels = []) => ({
  type: PUSH_NEW_LEVELS,
  levels,
});

export const setSelectedLevelAC = (selectedLevel = 0) => ({
  type: SET_SELECTED_LEVEL,
  selectedLevel,
});

export const setSelectedColorAC = (selectedColor = 0) => ({
  type: SET_SELECTED_COLOR,
  selectedColor,
});

export const setProgressCellAC = (id = null, row = null, col = null) => ({
  type: SET_PROGRESS_CELL,
  id,
  row,
  col,
});

export const removeProgressRowAC = (id = null, row = null) => ({
  type: REMOVE_PROGRESS_ROW,
  id,
  row,
});

export const removeProgressColAC = (id = null, col = null) => ({
  type: REMOVE_PROGRESS_COL,
  id,
  col,
});

export const removeProgressAllAC = (id = null) => ({
  type: REMOVE_PROGRESS_ALL,
  id,
});
