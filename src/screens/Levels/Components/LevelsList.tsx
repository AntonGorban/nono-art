import React from 'react';
import { ScrollView } from 'react-native';

import { PropsType } from '../../../types/utils';
import { styles } from '../Levels.styles';
import { ToLevelButton } from './ToLevelButton';

export const LevelsList = React.memo<Props>(({ levels, startLevel }) => (
  <ScrollView style={styles.container}>
    {levels.map(({ name, id }, idx) => (
      <ToLevelButton key={id} name={name} id={id} idx={idx} onPress={startLevel} />
    ))}
  </ScrollView>
));

type ToLevelButtonProps = PropsType<typeof ToLevelButton>[0];

interface Props {
  readonly levels: ReadonlyArray<Omit<ToLevelButtonProps, 'idx' | 'onPress'>>;
  readonly startLevel: ToLevelButtonProps['onPress'];
}
