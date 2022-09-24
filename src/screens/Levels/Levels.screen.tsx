import React from 'react';

import { LevelsScreenProps } from '../../types/types';
import { Levels } from './Levels';

export const LevelsScreen: React.FC<LevelsScreenProps> = ({ navigation }) => {
  return <Levels navigation={navigation} />;
};
