import React from 'react';
import { View } from 'react-native';

import { styles } from './ColorsMenu.styles';
import { ColorButton } from './Components/ColorButton';

export const ColorsMenu = React.memo<Props>(({ colors, selectedColor, selectColor }) => (
  <View style={styles.container}>
    <ColorButton idx={0} color={colors[0]} onClick={selectColor} isSelected={selectedColor === 0} />
    <ColorButton idx={1} color={colors[1]} onClick={selectColor} isSelected={selectedColor === 1} />
    <ColorButton idx={2} color={colors[2]} onClick={selectColor} isSelected={selectedColor === 2} />
  </View>
));

/* ---------------------------------- Types --------------------------------- */

interface Props {
  readonly colors: [string, string, string];
  readonly selectedColor: number;
  readonly selectColor: (idx: number) => void;
}
