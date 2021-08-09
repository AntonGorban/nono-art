import { createStore, combineReducers } from "redux";
import levelsReducer from "./levelsReducer";
import designerReducer from "./designerReducer";

let reducers = combineReducers({
  levels: levelsReducer,
  designer: designerReducer,
});

let store = createStore(reducers);

export default store;
