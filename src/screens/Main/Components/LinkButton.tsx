import React, { useCallback } from 'react';

import { useLinkTo } from '@react-navigation/native';

import { PropsType } from '../../../types/utils';
import { LinkButtonPresentation } from './LinkButton.presentation';

export const LinkButton = React.memo<LinkButtonProps>(({ to, ...props }) => {
  const navigate = useLinkTo();

  const navigatePressHandler = useCallback(() => navigate(to), [navigate, to]);

  return <LinkButtonPresentation {...props} onPress={navigatePressHandler} />;
});

/* ---------------------------------- Types --------------------------------- */

type LinkButtonPresentationProps = PropsType<typeof LinkButtonPresentation>[0];

interface LinkButtonProps extends Omit<LinkButtonPresentationProps, 'onPress'> {
  readonly to: string;
}
