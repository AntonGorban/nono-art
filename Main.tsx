import { StatusBar } from 'expo-status-bar';

import { Screens } from './src/screens/Screens';
import { Color } from './src/utils/Color';

export const Main: React.FC = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor={Color.dark} translucent={false} />
      <Screens />
    </>
  );
};
