import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { storage } from '../../../storage/storage';
import {
  DesignerState,
  NewColActionPayload,
  NewRowActionPayload,
  PickColorActionPayload,
  RemoveAllArtActionPayload,
  RemoveArtColActionPayload,
  RemoveArtRowActionPayload,
  RemoveColActionPayload,
  RemoveRowActionPayload,
  SetCellActionPayload,
  SetColorActionPayload,
  SetNameActionPayload,
  SetStateActionPayload,
} from './designer.interfaces';

const initialState: DesignerState = {
  name: '',
  colors: ['#FF0000', '#00FF00', '#0000FF'],
  art: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
};

export const designerSlice = createSlice({
  initialState,
  name: 'designer',
  reducers: {
    setState: (state, { payload }: PayloadAction<SetStateActionPayload>) => {
      storage.setObj('designer', { ...state, ...payload.state });
      return { ...state, ...payload.state };
    },

    /* -------------------------------------------------------------------------- */

    setName: (state, { payload }: PayloadAction<SetNameActionPayload>) => {
      state.name = payload.name
        .replace(/[^\wа-яё\s\d\-]/gim, '')
        .replace(/(\s\s)/gim, ' ')
        .replace(/(\-\-)/gim, ' ')
        .substring(0, 25);

      storage.setObj('designer', state);
    },

    /* -------------------------------------------------------------------------- */

    setCell: (state, { payload }: PayloadAction<SetCellActionPayload>) => {
      const cell = state.art[payload.row][payload.col];

      state.art[payload.row][payload.col] = cell !== payload.color ? payload.color : 0;

      storage.setObj('designer', state);
    },

    /* -------------------------------------------------------------------------- */

    setColor: (state, { payload }: PayloadAction<SetColorActionPayload>) => {
      const color = `#${payload.color
        .replace(/[^\dabcdef]/gim, '')
        .substring(0, 6)
        .toUpperCase()}`;

      state.colors[payload.idx] = color;

      storage.setObj('designer', state);
    },

    /* -------------------------------------------------------------------------- */

    pickColor: (state, { payload }: PayloadAction<PickColorActionPayload>) => {
      state.colors[payload.selectedColor] = payload.color.toUpperCase();

      storage.setObj('designer', state);
    },

    /* -------------------------------------------------------------------------- */

    newRow: (state, { payload }: PayloadAction<NewRowActionPayload>) => {
      if (state.art.length < 25) {
        const newRow = Array(state.art[0].length).fill(null);
        state.art.push(newRow);
      }
    },

    /* -------------------------------------------------------------------------- */

    removeRow: (state, { payload }: PayloadAction<RemoveRowActionPayload>) => {
      if (state.art.length > 3) {
        state.art.splice(0, -1);
      }
    },

    /* -------------------------------------------------------------------------- */

    newCol: (state, { payload }: PayloadAction<NewColActionPayload>) => {
      if (state.art[0].length < 20) {
        state.art.forEach((row) => {
          row.push(null);
        });
      }
    },

    /* -------------------------------------------------------------------------- */

    removeCol: (state, { payload }: PayloadAction<RemoveColActionPayload>) => {
      if (state.art[0].length > 3) {
        state.art.forEach((row) => {
          row.splice(0, -1);
        });
      }
    },

    /* -------------------------------------------------------------------------- */

    clearRow: (state, { payload }: PayloadAction<RemoveArtRowActionPayload>) => {
      state.art[payload.row].fill(null);
    },

    /* -------------------------------------------------------------------------- */

    clearCol: (state, { payload }: PayloadAction<RemoveArtColActionPayload>) => {
      state.art.forEach((row) => {
        row[payload.col] = null;
      });
    },

    /* -------------------------------------------------------------------------- */

    clearAll: (state, { payload }: PayloadAction<RemoveAllArtActionPayload>) => {
      state.art.forEach((row) => {
        row.fill(null);
      });
    },
  },
});

export default designerSlice.reducer;
