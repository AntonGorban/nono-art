import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

// @ts-ignore
import ClearImg from '../../../assets/img/redo.png';
import { Color } from '../../utils/Color';
import { styles } from './CleanButton.styles';

export const CleanButton = React.memo<Props>(({ cellSize, bigCellSize, cellBorderRadius, onClick }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={onClick}>
    <View
      style={{
        backgroundColor: Color.white,
        margin: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: bigCellSize,
        height: bigCellSize,
        borderRadius: cellBorderRadius,
        borderTopLeftRadius: cellSize,
      }}
    >
      <Image style={styles.image} source={ClearImg} />
    </View>
  </TouchableOpacity>
));

/* ---------------------------------- Types --------------------------------- */

interface Props {
  readonly cellSize: number;
  readonly bigCellSize: number;
  readonly cellBorderRadius: number;
  readonly onClick: () => void;
}
