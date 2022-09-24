import React from 'react';
import { View } from 'react-native';

import { PropsType } from '../../types/utils';
import { Counter } from './Components/Counter';

export const Counters = React.memo<Props>(({ counters, isHorizontal, ...props }) => (
  <View style={{ flexDirection: isHorizontal ? 'column' : 'row' }}>
    {counters.map((values, idx) => (
      <Counter key={idx} values={values} isHorizontal={isHorizontal} idx={idx} {...props} />
    ))}
  </View>
));

/* ---------------------------------- Types --------------------------------- */

type CounterProps = PropsType<typeof Counter>[0];

interface Props extends Omit<CounterProps, 'values' | 'idx'> {
  readonly counters: ReadonlyArray<CounterProps['values']>;
}
