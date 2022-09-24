import React, { useCallback } from 'react';

import { PropsType } from '../../../types/utils';
import { CounterPresentation } from './Counter.presentation';

export const Counter = React.memo<Props>(({ idx, onClick, ...props }) => {
  const counterClickHandler = useCallback(() => onClick(idx), [idx, onClick]);

  return <CounterPresentation onClick={counterClickHandler} {...props} />;
});

/* ---------------------------------- Types --------------------------------- */

type CounterPresentationProps = PropsType<typeof CounterPresentation>[0];

interface Props extends Omit<CounterPresentationProps, 'onClick'> {
  readonly idx: number;
  readonly onClick: (idx: number) => void;
}
