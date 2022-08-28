import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import { useAppSelector } from './src/hooks/services/store/store';
import { useDesignerActions } from './src/hooks/services/store/useDesignerActions';
import { useLevelsActions } from './src/hooks/services/store/useLevelsActions';
import { Screens } from './src/screens/Screens';
import { storage } from './src/services/storage/storage';
import { setupStore } from './src/services/store/store';
import { Color } from './src/utils/Color';
import { FontFamily } from './src/utils/FontFamily';

const App: React.FC = () => {
  const { setState: setDesignerState } = useDesignerActions();
  const { fetchLevels, getLevelsFromStorage } = useLevelsActions();

  const state = useAppSelector((state) => state.levels);

  useEffect(() => {
    storage.getObj('designer').then((data) => {
      if (data !== null) setDesignerState(data);
    });
  }, []);

  useEffect(() => {
    getLevelsFromStorage().finally(() => fetchLevels());
  }, []);

  console.log('state', state);

  return (
    <>
      <StatusBar style="light" backgroundColor={Color.dark} translucent={false} />
      <Screens />
    </>
  );
};

SplashScreen.preventAutoHideAsync();

const store = setupStore();

export default function () {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  /* ---------------------------------- Fonts --------------------------------- */

  useEffect(() => {
    Font.loadAsync({
      [FontFamily.montserratAltLight]: require('./assets/fonts/MontserratAlternates-Light.otf'),
      [FontFamily.montserratAltRegular]: require('./assets/fonts/MontserratAlternates-Regular.otf'),
      [FontFamily.montserratAltBold]: require('./assets/fonts/MontserratAlternates-Bold.otf'),
      [FontFamily.frederickaTheGreat]: require('./assets/fonts/FrederickatheGreat-Regular.otf'),
    }).then(() => setAppIsReady(true));
  }, []);

  /* --------------------------------- / Fonts -------------------------------- */

  useEffect(() => {
    if (appIsReady) SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <Provider store={store}>
      <App />;
    </Provider>
  );
}
