import { Domain } from '../../../../types/domain';

export type DesignerState = Omit<Domain.LevelType, 'id'>;

/* -------------------------------------------------------------------------- */

export interface SetStateActionPayload {
  readonly state: DesignerState;
}

/* -------------------------------------------------------------------------- */

export interface SetNameActionPayload {
  readonly name: string;
}

/* -------------------------------------------------------------------------- */

export interface SetCellActionPayload {
  readonly row: number;
  readonly col: number;
  readonly color: Domain.CellType;
}

/* -------------------------------------------------------------------------- */

export interface SetColorActionPayload {
  readonly idx: number;
  readonly color: string;
}

/* -------------------------------------------------------------------------- */

export interface PickColorActionPayload {
  readonly color: string;
  readonly selectedColor: number;
}

/* -------------------------------------------------------------------------- */

export interface NewRowActionPayload {}

/* -------------------------------------------------------------------------- */

export interface RemoveRowActionPayload {}

/* -------------------------------------------------------------------------- */

export interface NewColActionPayload {}

/* -------------------------------------------------------------------------- */

export interface RemoveColActionPayload {}

/* -------------------------------------------------------------------------- */

export interface RemoveArtRowActionPayload {
  readonly row: number;
}

/* -------------------------------------------------------------------------- */

export interface RemoveArtColActionPayload {
  readonly col: number;
}

/* -------------------------------------------------------------------------- */

export interface RemoveAllArtActionPayload {}
