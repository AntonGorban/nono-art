import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect } from 'react';
import { Provider } from 'react-redux';

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

  useEffect(() => {
    storage.getObj('designer').then((data) => {
      if (data !== null) setDesignerState(data);
    });
  }, [setDesignerState]);

  useEffect(() => {
    getLevelsFromStorage().finally(() => fetchLevels());
  }, [fetchLevels, getLevelsFromStorage]);

  return <Screens />;
};

SplashScreen.preventAutoHideAsync();

const store = setupStore();

export default function () {
  /* ---------------------------------- Fonts --------------------------------- */

  const [fontsIsLoaded] = Font.useFonts({
    [FontFamily.montserratAltLight]: require('./assets/fonts/MontserratAlternates-Light.otf'),
    [FontFamily.montserratAltRegular]: require('./assets/fonts/MontserratAlternates-Regular.otf'),
    [FontFamily.montserratAltBold]: require('./assets/fonts/MontserratAlternates-Bold.otf'),
    [FontFamily.frederickaTheGreat]: require('./assets/fonts/FrederickatheGreat-Regular.otf'),
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsIsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  /* --------------------------------- / Fonts -------------------------------- */

  if (!fontsIsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar style="light" backgroundColor={Color.dark} translucent={false} />
      <App />
    </Provider>
  );
}
