import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import { Main } from './Main';
import { FontFamily } from './src/utils/FontFamily';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    Font.loadAsync({
      [FontFamily.montserratAltLight]: require('./assets/fonts/MontserratAlternates-Light.otf'),
      [FontFamily.montserratAltRegular]: require('./assets/fonts/MontserratAlternates-Regular.otf'),
      [FontFamily.montserratAltBold]: require('./assets/fonts/MontserratAlternates-Bold.otf'),
      [FontFamily.frederickaTheGreat]: require('./assets/fonts/FrederickatheGreat-Regular.otf'),
    }).then(() => setAppIsReady(true));
  }, []);

  useEffect(() => {
    if (appIsReady) SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return <Main />;
}
