import React, { useCallback } from 'react';

import { PropsType } from '../../../types/utils';
import { ColorButtonPresentation } from './ColorButton.presentation';

export const ColorButton = React.memo<Props>(({ idx, onClick, ...props }) => {
  const colorButtonCLickHandler = useCallback(() => onClick(idx), [idx, onClick]);

  return <ColorButtonPresentation onClick={colorButtonCLickHandler} {...props} />;
});

/* ---------------------------------- Types --------------------------------- */

type ColorButtonPresentationProps = PropsType<typeof ColorButtonPresentation>[0];

interface Props extends Omit<ColorButtonPresentationProps, 'onClick'> {
  readonly idx: number;
  readonly onClick: (idx: number) => void;
}
