import { createAsyncThunk } from '@reduxjs/toolkit';

import { storage } from '../../../../storage';

/* -------------------------------------------------------------------------- */

export const fetchLevels = createAsyncThunk('levels/fetch', async (_, thunkApi) => {
  try {
    const levels = await fetch('https://raw.githubusercontent.com/AntonGorban/nono-art/levels/levels.json').then(
      (response) => response.json()
    );

    return thunkApi.fulfillWithValue({ levels });
  } catch {
    return thunkApi.rejectWithValue({ error: 'Не удалось загрузить уровни' });
  }
});

/* -------------------------------------------------------------------------- */

export const getLevelsFromStorage = createAsyncThunk('levels/getFromStorage', async (_, thunkApi) => {
  try {
    const levels = await storage.getObj('levels');

    return thunkApi.fulfillWithValue({ levels });
  } catch {
    return thunkApi.rejectWithValue({ error: 'В локальном хранилище нет уровней' });
  }
});
