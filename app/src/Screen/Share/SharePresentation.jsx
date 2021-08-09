import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import sett from "../../settings";

export const SharePresentation = ({ message, sendData, level }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Вы можете отправить нам созданный вами уровень нажав на кнопку отправить
    </Text>
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={sendData}
    >
      <Text style={styles.buttonText}>Отправить</Text>
    </TouchableOpacity>
    {message !== "" && <Text style={styles.text}>{message}</Text>}

    <View style={styles.offer}>
      <Text style={styles.text}>
        Код, который вы видите ниже, это созданный выми уровень записанный в
        специальном формате. Если у вас не получилось отправить его кнопкой
        сверху, отправьте этот код разработчикам на почту:
      </Text>
      <TouchableOpacity
        style={styles.link}
        onPress={() => Linking.openURL("mailto:antogor.home@gmail.com")}
        activeOpacity={0.7}
      >
        <Text style={styles.linkText}>Антон Горбань</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => Linking.openURL("mailto:0669600185d@gmail.com")}
        activeOpacity={0.7}
      >
        <Text style={styles.linkText}>Дмитрий Прачёв</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.output} selectable={true}>
      {level}
    </Text>
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={() => navigation.goBack()}
    >
      <Text style={styles.buttonText}>Назад</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: sett.color.black,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  offer: {},
  text: {
    color: sett.color.white,
    textAlign: "justify",
    fontFamily: sett.font.montserrat.regular,
    fontSize: 14,
    marginVertical: 2,
  },
  link: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 4,
  },
  linkText: {
    color: sett.color.white,
    textAlign: "justify",
    fontFamily: sett.font.montserrat.bold,
    fontSize: 14,
  },
  output: {
    color: sett.color.darkBlack,
    backgroundColor: sett.color.white,
    padding: 5,
    borderRadius: 10,
    textAlign: "justify",
    fontFamily: sett.font.montserrat.light,
    fontSize: 12,
    lineHeight: 11,
    letterSpacing: -0.1,
  },
  button: {
    backgroundColor: sett.color.white,
    paddingVertical: 10,
    width: "70%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: sett.color.darkBlack,
    textAlign: "justify",
    fontFamily: sett.font.montserrat.bold,
    fontSize: 16,
  },
});
