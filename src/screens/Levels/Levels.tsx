import React, { useCallback, useMemo } from 'react';

import { StackNavigationProp } from '@react-navigation/stack';

import { useAppSelector } from '../../hooks/services/store/store';
import { RootStackParamList } from '../../types/types';
import { ScreenName } from '../../utils/ScreenName';
import { LevelsPresentation } from './Levels.presentation';

export const Levels: React.FC<Props> = ({ navigation }) => {
  const levels = useAppSelector((state) => state.levels.levels);
  const levelsError = useAppSelector((state) => state.levels.error);
  const levelsIsLoading = useAppSelector((state) => state.levels.isFetching);
  const levelsIsLoaded = useAppSelector((state) => state.levels.isFetched);

  const preparedLevels = useMemo(() => levels.map(({ name }, idx) => ({ name, id: idx })), [levels]);

  const startLevel = useCallback((id: number) => navigation.navigate(ScreenName.game, { id }), [navigation]);

  return <LevelsPresentation levels={preparedLevels} startLevel={startLevel} />;
};

interface Props {
  readonly navigation: StackNavigationProp<RootStackParamList, ScreenName.levels>;
}
