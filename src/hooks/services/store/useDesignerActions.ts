import { useCallback } from 'react';

import {
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
} from '../../../services/store/reducers/designer/designer.interfaces';
import { designerSlice } from '../../../services/store/reducers/designer/designer.slice';
import { useAppDispatch } from './store';

export const useDesignerActions = () => {
  const dispatch = useAppDispatch();

  /* -------------------------------------------------------------------------- */

  const setState = useCallback(
    (payload: SetStateActionPayload) => dispatch(designerSlice.actions.setState(payload)),
    []
  );

  /* -------------------------------------------------------------------------- */

  const setName = useCallback((payload: SetNameActionPayload) => dispatch(designerSlice.actions.setName(payload)), []);

  /* -------------------------------------------------------------------------- */

  const setCell = useCallback((payload: SetCellActionPayload) => dispatch(designerSlice.actions.setCell(payload)), []);

  /* -------------------------------------------------------------------------- */

  const setColor = useCallback(
    (payload: SetColorActionPayload) => dispatch(designerSlice.actions.setColor(payload)),
    []
  );

  /* -------------------------------------------------------------------------- */

  const pickColor = useCallback(
    (payload: PickColorActionPayload) => dispatch(designerSlice.actions.pickColor(payload)),
    []
  );

  /* -------------------------------------------------------------------------- */

  const newRow = useCallback(
    (payload: NewRowActionPayload = {}) => dispatch(designerSlice.actions.newRow(payload)),
    []
  );

  /* -------------------------------------------------------------------------- */

  const removeRow = useCallback(
    (payload: RemoveRowActionPayload = {}) => dispatch(designerSlice.actions.removeRow(payload)),
    []
  );

  /* -------------------------------------------------------------------------- */

  const newCol = useCallback(
    (payload: NewColActionPayload = {}) => dispatch(designerSlice.actions.newCol(payload)),
    []
  );

  /* -------------------------------------------------------------------------- */

  const removeCol = useCallback(
    (payload: RemoveColActionPayload = {}) => dispatch(designerSlice.actions.removeCol(payload)),
    []
  );

  /* -------------------------------------------------------------------------- */

  const clearRow = useCallback(
    (payload: RemoveArtRowActionPayload) => dispatch(designerSlice.actions.clearRow(payload)),
    []
  );

  /* -------------------------------------------------------------------------- */

  const clearCol = useCallback(
    (payload: RemoveArtColActionPayload) => dispatch(designerSlice.actions.clearCol(payload)),
    []
  );

  /* -------------------------------------------------------------------------- */

  const clearAll = useCallback(
    (payload: RemoveAllArtActionPayload = {}) => dispatch(designerSlice.actions.clearAll(payload)),
    []
  );

  /* -------------------------------------------------------------------------- */

  return {
    setState,
    setName,
    setCell,
    setColor,
    pickColor,
    newRow,
    removeRow,
    newCol,
    removeCol,
    clearRow,
    clearCol,
    clearAll,
  };
};
