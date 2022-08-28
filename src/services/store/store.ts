import { combineReducers, configureStore } from '@reduxjs/toolkit';

import designerReducer from './reducers/designer/designer.slice';
import levelsReducer from './reducers/levels/levels.slice';

const rootReducer = combineReducers({
  levels: levelsReducer,
  designer: designerReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
