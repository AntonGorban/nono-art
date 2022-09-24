import React, { useCallback } from 'react';
import { View } from 'react-native';

import { MainScreenProps } from '../../types/types';
import { ScreenName } from '../../utils/ScreenName';
import { LinkButton } from './Components/LinkButton';
import { styles } from './Main.styles';

export const Main: React.FC<Props> = ({ navigation }) => {
  const navigateToLevelsScreen = useCallback(() => navigation.navigate(ScreenName.levels), [navigation]);

  const navigateToAny = useCallback(() => navigation.navigate(ScreenName.game), [navigation]);

  return (
    <View style={styles.container}>
      <LinkButton name="Уровни" onPress={navigateToLevelsScreen} />

      <LinkButton name="Продолжить" onPress={navigateToAny} />

      <LinkButton name="Рисовать" onPress={navigateToAny} />

      <LinkButton name="О игре" onPress={navigateToAny} />
    </View>
  );
};

/* ---------------------------------- Types --------------------------------- */

interface Props {
  readonly navigation: MainScreenProps['navigation'];
}
