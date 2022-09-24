import React from 'react';
import { Platform } from 'react-native';

import { CellAndroidPresentation } from './Cell.android.presentation';
import { CellProps } from './Cell.interface';
import { CellPresentation } from './Cell.presentation';

export const Cell = React.memo<CellProps>(({ ...props }) =>
  Platform.OS === 'android' ? <CellAndroidPresentation {...props} /> : <CellPresentation {...props} />
);
