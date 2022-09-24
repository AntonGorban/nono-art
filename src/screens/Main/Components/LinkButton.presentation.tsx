import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import { Color } from '../../../utils/Color';
import { styles } from '../Main.styles';

export const LinkButtonPresentation = React.memo<LinkButtonPresentationProps>(({ name, onPress }) => (
  <TouchableHighlight activeOpacity={1} underlayColor={Color.dark} style={styles.buttonContainer} onPress={onPress}>
    <View>
      <Text style={styles.buttonText}>{name}</Text>
    </View>
  </TouchableHighlight>
));

/* ---------------------------------- Types --------------------------------- */

interface LinkButtonPresentationProps {
  readonly name: string;
  readonly onPress: () => void;
}
