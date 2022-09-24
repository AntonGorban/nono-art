import React from 'react';
import { View } from 'react-native';

import { LinksType } from '../../types/types';
import { LinkButton } from './Components/LinkButton';
import { styles } from './Main.styles';

export const MainPresentation = React.memo<MainPresentationProps>(({ links }) => (
  <View style={styles.container}>
    {links.map(({ name, to }) => (
      <LinkButton key={to} name={name} to={to} />
    ))}
  </View>
));

/* ---------------------------------- Types --------------------------------- */

interface MainPresentationProps {
  readonly links: LinksType;
}
