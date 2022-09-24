import React, { useContext } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight } from 'react-native';
import sett from '../../settings';

export const LevelsPresentation = ({ levels, startLevel }) => (
  <View style={styles.wrap}>
    <Text style={styles.title}>Уровни:</Text>
    <ScrollView style={styles.container}>
      {levels.map((level, id) => (
        <TouchableHighlight
          style={styles.buttonContainer}
          activeOpacity={1}
          underlayColor={sett.color.dark}
          key={`level.${id}`}
          onPress={() => startLevel(id)}
        >
          <View>
            <Text style={styles.buttonText}>{`${id + 1}. ${level.name}`}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: sett.color.black,
    paddingTop: 25,
  },
  title: {
    marginBottom: 25,
    fontSize: 25,
    textAlign: 'center',
    color: sett.color.white,
    fontFamily: sett.font.montserrat.bold,
    textTransform: 'uppercase',
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: '80%',
    marginHorizontal: '10%',
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: sett.color.white,
    borderRadius: 25,
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: sett.color.white,
    fontFamily: sett.font.montserrat.regular,
    textTransform: 'uppercase',
  },
});
