import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import sett from '../../settings';

export const LevelNameDesigner = ({
  name = '',
  width = 0,
  height = 0,
  onInput = () => console.warn('onInput func not found on LevelNameDesigner.jsx component'),
  newRow = () => console.warn('newRow func not found on LevelNameDesigner.jsx component'),
  removeRow = () => console.warn('removeRow func not found on LevelNameDesigner.jsx component'),
  newCol = () => console.warn('newCol func not found on LevelNameDesigner.jsx component'),
  removeCol = () => console.warn('removeCol func not found on LevelNameDesigner.jsx component'),
  toShare = () => console.warn('toShare func not found on LevelNameDesigner.jsx component'),
}) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <Text style={styles.counter}>ширина: {width}</Text>
      <View style={styles.wrap}>
        <TouchableHighlight
          activeOpacity={0.3}
          underlayColor={sett.color.dark}
          style={styles.buttonContainer}
          onPress={removeCol}
        >
          <View>
            <Text style={styles.buttonText}>-</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.3}
          underlayColor={sett.color.dark}
          style={styles.buttonContainer}
          onPress={newCol}
        >
          <View>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
    <View style={styles.main}>
      <TouchableHighlight
        activeOpacity={0.3}
        underlayColor={sett.color.dark}
        style={styles.shareContainer}
        onPress={toShare}
      >
        <View>
          <Text style={styles.shareText}>{'поделиться >'}</Text>
        </View>
      </TouchableHighlight>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Название уровня"
        placeholderTextColor={`${sett.color.white}99`}
        onChangeText={onInput}
        maxLength={25}
        textAlign="center"
      />
    </View>
    <View style={styles.wrapper}>
      <Text style={styles.counter}>высота: {height}</Text>
      <View style={styles.wrap}>
        <TouchableHighlight
          activeOpacity={0.3}
          underlayColor={sett.color.dark}
          style={styles.buttonContainer}
          onPress={removeRow}
        >
          <View>
            <Text style={styles.buttonText}>-</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.3}
          underlayColor={sett.color.dark}
          style={styles.buttonContainer}
          onPress={newRow}
        >
          <View>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  input: {
    color: sett.color.white,
    fontSize: 16,
    fontFamily: sett.font.montserrat.regular,
    textAlign: 'center',
    borderColor: sett.color.white,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    height: 30,
    width: '100%',
    flex: 1,
  },
  wrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  main: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  counter: {
    color: sett.color.white,
    fontSize: 14,
    fontFamily: sett.font.montserrat.light,
    textAlign: 'center',
    paddingBottom: 5,
  },
  buttonContainer: {
    width: 25,
    height: 25,
    backgroundColor: sett.color.white,
    borderRadius: 5,
    marginHorizontal: 7,
  },
  buttonText: {
    color: sett.color.dark,
    fontSize: 20,
    lineHeight: 25,
    fontFamily: sett.font.montserrat.bold,
    textAlign: 'center',
  },
  shareContainer: {
    backgroundColor: sett.color.white,
    height: 25,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  shareText: {
    color: sett.color.dark,
    fontSize: 15,
    lineHeight: 25,
    fontFamily: sett.font.montserrat.regular,
    textAlign: 'center',
  },
});
