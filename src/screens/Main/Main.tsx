import React from 'react';

import { LinksType } from '../../types/types';
import { MainPresentation } from './Main.presentation';

export const Main = () => {
  return <MainPresentation links={links} />;
};

const links: LinksType = [
  { name: 'Уровни', to: '/Levels' },
  { name: 'Продолжить', to: '/Game' },
  { name: 'Рисовать', to: '/Designer' },
  { name: 'О игре', to: '/About' },
];
