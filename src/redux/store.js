import { createStore, combineReducers } from 'redux';
import levelsReducer from './levelsReducer';
import designerReducer from './designerReducer';

const reducers = combineReducers({
  levels: levelsReducer,
  designer: designerReducer,
});

const store = createStore(reducers);

export default store;
