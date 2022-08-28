import { Domain } from '../../../../types/domain';

export interface LevelsState {
  readonly levels: ReadonlyArray<Domain.LevelType>;
  readonly isFetching: boolean;
  readonly isFetched: boolean;
  readonly error: string;
}

/* -------------------------------------------------------------------------- */

export interface SetStateActionPayload {
  readonly state: LevelsState;
}

/* -------------------------------------------------------------------------- */

export interface PushNewLevelsActionPayload {
  readonly levels: ReadonlyArray<Domain.LevelType>;
}

/* -------------------------------------------------------------------------- */

export interface FetchLevelsPendingActionPayload {}

/* -------------------------------------------------------------------------- */

export interface FetchLevelsFulfilledActionPayload {
  readonly levels: ReadonlyArray<Domain.LevelType>;
}

/* -------------------------------------------------------------------------- */

export interface FetchLevelsErrorActionPayload {
  readonly error: string;
}

/* -------------------------------------------------------------------------- */

export interface GetLevelsFromStorageFulfilledActionPayload {
  readonly levels: ReadonlyArray<Domain.LevelType>;
}
