import { useCallback } from 'react';

import {
  PushNewLevelsActionPayload,
  SetStateActionPayload,
} from '../../../services/store/reducers/levels/levels.interfaces';
import { levelsSlice } from '../../../services/store/reducers/levels/levels.slice';
import {
  fetchLevels as fetchLevelsThunk,
  getLevelsFromStorage as getLevelsFromStorageThunk,
} from '../../../services/store/reducers/levels/levels.thunks';
import { useAppDispatch } from './store';

export const useLevelsActions = () => {
  const dispatch = useAppDispatch();

  /* -------------------------------------------------------------------------- */

  const setState = useCallback((payload: SetStateActionPayload) => dispatch(levelsSlice.actions.setState(payload)), []);

  /* -------------------------------------------------------------------------- */

  const setName = useCallback(
    (payload: PushNewLevelsActionPayload) => dispatch(levelsSlice.actions.pushNewLevels(payload)),
    []
  );

  /* -------------------------------------------------------------------------- */

  const fetchLevels = useCallback(() => dispatch(fetchLevelsThunk()), []);

  /* -------------------------------------------------------------------------- */

  const getLevelsFromStorage = useCallback(() => dispatch(getLevelsFromStorageThunk()), []);

  /* -------------------------------------------------------------------------- */

  return {
    setState,
    setName,
    fetchLevels,
    getLevelsFromStorage,
  };
};
