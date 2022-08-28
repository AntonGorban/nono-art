import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { storage } from '../../../storage/storage';
import {
  FetchLevelsErrorActionPayload,
  FetchLevelsFulfilledActionPayload,
  FetchLevelsPendingActionPayload,
  GetLevelsFromStorageFulfilledActionPayload,
  LevelsState,
  PushNewLevelsActionPayload,
  SetStateActionPayload,
} from './levels.interfaces';
import { fetchLevels, getLevelsFromStorage } from './levels.thunks';

const initialState: LevelsState = {
  levels: [
    {
      id: '',
      name: 'Сердечко',
      colors: ['#000a12', '#ff1744', '#ffab00'],
      art: [
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        [1, 2, 2, 2, 1, 1, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 3, 2, 2, 3, 2, 2, 1],
        [1, 2, 2, 2, 3, 3, 2, 2, 2, 1],
        [1, 2, 2, 3, 3, 3, 3, 2, 2, 1],
        [0, 1, 2, 2, 3, 3, 2, 2, 1, 0],
        [0, 0, 1, 2, 2, 2, 2, 1, 0, 0],
        [0, 0, 0, 1, 2, 2, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      ],
    },
  ],
  isFetching: false,
  isFetched: false,
  error: '',
};

export const levelsSlice = createSlice({
  initialState,
  name: 'levels',
  reducers: {
    setState: (state, { payload }: PayloadAction<SetStateActionPayload>) => {
      storage.setObj('levels', payload.state);
      return { ...state, ...payload.state };
    },

    /* -------------------------------------------------------------------------- */

    pushNewLevels: (state, { payload }: PayloadAction<PushNewLevelsActionPayload>) => {
      storage.setObj('levels', [...state.levels, ...payload.levels]);
      return { ...state, levels: [...state.levels, ...payload.levels] };
    },
  },

  /* -------------------------------------------------------------------------- */

  extraReducers: {
    [fetchLevels.pending.type]: (state, { payload }: PayloadAction<FetchLevelsPendingActionPayload>) => {
      state.isFetching = true;
    },

    /* -------------------------------------------------------------------------- */

    [fetchLevels.fulfilled.type]: (state, { payload }: PayloadAction<FetchLevelsFulfilledActionPayload>) => {
      state.isFetching = false;
      state.isFetched = true;
      state.error = '';
      console.log(payload);
      // @ts-ignore
      state.levels = payload.levels;
    },

    /* -------------------------------------------------------------------------- */

    [fetchLevels.rejected.type]: (state, { payload }: PayloadAction<FetchLevelsErrorActionPayload>) => {
      state.isFetching = false;
      state.error = payload.error;
    },

    /* -------------------------------------------------------------------------- */

    [getLevelsFromStorage.fulfilled.type]: (
      state,
      { payload }: PayloadAction<GetLevelsFromStorageFulfilledActionPayload>
    ) => {
      if (!state.isFetching && !state.isFetched) {
        // @ts-ignore
        state.levels = payload.levels;
      }
    },
  },
});

export default levelsSlice.reducer;
