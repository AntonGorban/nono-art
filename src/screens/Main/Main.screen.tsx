import React from 'react';

import { MainScreenProps } from '../../types/types';
import { Main } from './Main';

export const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  return <Main navigation={navigation} />;
};
