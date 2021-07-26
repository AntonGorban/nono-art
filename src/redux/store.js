import { createStore, combineReducers } from "redux";
import levelsReducer from "./levelsReducer";

let reducers = combineReducers({
  levels: levelsReducer,
});

let store = createStore(reducers);

export default store;
