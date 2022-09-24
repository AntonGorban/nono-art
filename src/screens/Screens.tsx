import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Color } from '../utils/Color';
import { FontFamily } from '../utils/FontFamily';
import { ScreenName } from '../utils/ScreenName';
import { Main } from './Main/Main';

const Stack = createStackNavigator();

export const Screens: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={ScreenName.main}>
      {screens.map(({ name, component }) => (
        <Stack.Screen
          key={name}
          navigationKey={name}
          name={name}
          component={component}
          options={{
            animationEnabled: false,
            title: 'nonoArt',
            headerStyle: {
              backgroundColor: Color.dark,
              borderColor: Color.white,
              borderStyle: 'solid',
              borderBottomWidth: 1,
            },
            headerTitleAlign: 'center',
            headerTintColor: Color.white,
            headerTitleStyle: {
              fontSize: 35,
              color: Color.white,
              fontFamily: FontFamily.frederickaTheGreat,
              textAlign: 'center',
            },
          }}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

const screens = [
  { name: ScreenName.main, component: Main },
  {
    name: 'Levels',
    component: () => (
      <View>
        <Text>Levels</Text>
      </View>
    ),
  },
  // { name: "Levels", component: Levels },
  // { name: "Game", component: Game },
  // { name: "Designer", component: Designer },
  // { name: "About", component: About },
  // { name: "ColorPicker", component: ColorPicker },
  // { name: "Share", component: Share },
];
