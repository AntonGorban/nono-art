import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import { Color } from '../../../utils/Color';
import { styles } from '../Levels.styles';

export const ToLevelButtonPresentation = React.memo<Props>(({ name, idx, onPress }) => (
  <TouchableHighlight style={styles.buttonContainer} activeOpacity={1} underlayColor={Color.dark} onPress={onPress}>
    <View>
      <Text style={styles.buttonText}>{`${idx + 1}. ${name}`}</Text>
    </View>
  </TouchableHighlight>
));

interface Props {
  readonly name: string;
  readonly idx: number;
  readonly onPress: () => void;
}
