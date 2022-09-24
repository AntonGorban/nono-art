import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import { Color } from '../../../utils/Color';

export const ColorButtonPresentation = React.memo<Props>(({ color, isSelected, onClick }) => (
  <TouchableHighlight
    onPress={onClick}
    activeOpacity={0.7}
    underlayColor={Color.dark}
    style={{
      height: 75,
      width: 75,
      borderRadius: 75 / 2,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: Color.dark,
      borderWidth: isSelected ? 5 : 0,
    }}
  >
    <View
      style={{
        height: 70,
        width: 70,
        borderRadius: 40,
        borderStyle: 'solid',
        borderColor: Color.white,
        backgroundColor: color,
        borderWidth: isSelected ? 3 : 0,
      }}
    />
  </TouchableHighlight>
));

/* ---------------------------------- Types --------------------------------- */

interface Props {
  readonly color: string;
  readonly isSelected: boolean;
  readonly onClick: () => void;
}
