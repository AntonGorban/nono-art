import React from 'react';
import { Text, View } from 'react-native';

import { PropsType } from '../../types/utils';
import { LevelsList } from './Components/LevelsList';
import { styles } from './Levels.styles';

export const LevelsPresentation = React.memo<Props>(({ levels, startLevel }) => (
  <View style={styles.wrap}>
    <Text style={styles.title}>Уровни:</Text>

    <LevelsList levels={levels} startLevel={startLevel} />
  </View>
));

type LevelsListProps = PropsType<typeof LevelsList>[0];

type Props = LevelsListProps;
