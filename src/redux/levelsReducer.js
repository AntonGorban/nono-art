const SET_LEVELS = "SET-LEVELS";
const PUSH_NEW_LEVELS = "PUSH-NEW-LEVELS";
const SET_SELECTED_LEVEL = "SET-SELECTED-LEVEL";

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
