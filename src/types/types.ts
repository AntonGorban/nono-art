import { StackScreenProps } from '@react-navigation/stack';

import { ScreenName } from '../utils/ScreenName';

export type LinksType = ReadonlyArray<LinkType>;

export type LinkType = {
  readonly name: string;
  readonly to: ScreenName;
};

export type RootStackParamList = {
  [ScreenName.main]: undefined;
  [ScreenName.levels]: undefined;
  [ScreenName.game]: { id: number };
};

export type MainScreenProps = StackScreenProps<RootStackParamList, ScreenName.main>;
export type LevelsScreenProps = StackScreenProps<RootStackParamList, ScreenName.levels>;
export type GameScreenProps = StackScreenProps<RootStackParamList, ScreenName.game>;
