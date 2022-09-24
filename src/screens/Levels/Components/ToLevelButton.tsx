import React, { useCallback } from 'react';

import { PropsType } from '../../../types/utils';
import { ToLevelButtonPresentation } from './ToLevelButton.presentation';

export const ToLevelButton = React.memo<Props>(({ id, onPress, ...props }) => {
  const toLevelButtonPressHandler = useCallback(() => onPress(id), [id, onPress]);

  return <ToLevelButtonPresentation onPress={toLevelButtonPressHandler} {...props} />;
});

/* ---------------------------------- Types --------------------------------- */

type ToLevelButtonPresentationProps = PropsType<typeof ToLevelButtonPresentation>[0];

interface Props extends Omit<ToLevelButtonPresentationProps, 'onPress'> {
  readonly id: number;
  readonly onPress: (id: number) => void;
}
