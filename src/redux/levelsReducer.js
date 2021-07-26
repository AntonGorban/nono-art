const SET_LEVELS = "SET-LEVELS";

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
    },
  ],
  selectLevels: 0,
};

const levelsReducer = (prevState = initialState, action) => {
  let state = { ...prevState };

  switch (action.type) {
    case SET_LEVELS:
      let levels = action.levels;
      state.levels = levels;
      return state;

    // const updateLevels = (levels) => {
    //   storage.setObj("levels", levels);
    //   setLevels(levels);
    // };

    // const updateSelectedLevel = (selectedLevel) => {
    //   storage.setObj("selectedLevel", selectedLevel);
    //   setSelectedLevel(selectedLevel);
    // };

    default:
      return state;
  }
};

export default levelsReducer;

// export const updateEmailAC = (email = "") => ({ type: UPDATE_EMAIL, email });
