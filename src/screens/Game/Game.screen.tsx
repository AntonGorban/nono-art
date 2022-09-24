import { View, Text } from 'react-native';

import { GameScreenProps } from '../../types/types';

export const GameScreen: React.FC<GameScreenProps> = ({ route }) => {
  return (
    <View>
      <Text>Game</Text>
      <Text>{JSON.stringify(route, null, 2)}</Text>
    </View>
  );
};
