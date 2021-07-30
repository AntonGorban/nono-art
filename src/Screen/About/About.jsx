import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import sett from "../../settings";

import antogorImg from "../../assets/img/antogor.jpg";
import dimasImg from "../../assets/img/dimas.jpg";

import userIcon from "../../assets/img/fa-user-regular.svg";
import mailIcon from "../../assets/img/fa-envelope-regular.svg";

import coderIcon from "../../assets/img/fa-terminal-solid.svg";
import designerIcon from "../../assets/img/fa-icons-solid.svg";

import githubIcon from "../../assets/img/fa-github-brands.svg";

export const About = () => (
  <View style={styles.container}>
    <Text style={styles.title}>О игре:</Text>
    <ScrollView style={styles.scroll}>
      <Text style={styles.text}>
        nonoArt - это мобильная игра, совмещающая собой японскую головоломку
        nonogram и увлекательное рисование pixel-артов.
      </Text>
      <Text style={styles.text}>
        Игра разработана для участия в IT-олимпиаде "IT-Планета 2020/21". Но
        будет развиваться и дальше
      </Text>
      <Text style={styles.text}>
        Игра была разработана в команде из двух человек:
      </Text>
      <View style={styles.person}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/AntonGorban")}
          activeOpacity={0.7}
        >
          <Image style={styles.img} source={antogorImg} />
        </TouchableOpacity>
        <View style={styles.field}>
          <Image style={styles.userIcon} source={userIcon} />
          <Text style={styles.fieldText}>Антон Горбань</Text>
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:antogor.work@gmail.com")}
          activeOpacity={0.7}
        >
          <View style={styles.field}>
            <Image style={styles.mailIcon} source={mailIcon} />
            <Text style={styles.fieldText}>antogor.work@gmail.com</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.field}>
          <Image style={styles.coderIcon} source={coderIcon} />
          <Text style={styles.fieldText}>Программист, UX / UI</Text>
        </View>
      </View>
      <View style={styles.person}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://vk.com/donetskuy")}
          activeOpacity={0.7}
        >
          <Image style={styles.img} source={dimasImg} />
        </TouchableOpacity>
        <View style={styles.field}>
          <Image style={styles.userIcon} source={userIcon} />
          <Text style={styles.fieldText}>Дмитрий Прачёв</Text>
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:0669600185d@gmail.com")}
          activeOpacity={0.7}
        >
          <View style={styles.field}>
            <Image style={styles.mailIcon} source={mailIcon} />
            <Text style={styles.fieldText}>0669600185d@gmail.com</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.field}>
          <Image style={styles.designerIcon} source={designerIcon} />
          <Text style={styles.fieldText}>Дизайнер уровней, UX / UI</Text>
        </View>
      </View>
      <View style={styles.repo}>
        <Text style={styles.text}>Репозиторий игры:</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://github.com/AntonGorban/nono-art")
          }
          activeOpacity={0.7}
        >
          <View style={styles.field}>
            <Image style={styles.designerIcon} source={githubIcon} />
            <Text style={styles.fieldText}>
              github.com/AntonGorban/nono-art
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: sett.color.black,
    paddingVertical: 25,
  },
  title: {
    marginBottom: 25,
    fontSize: 25,
    textAlign: "center",
    color: sett.color.white,
    fontFamily: sett.font.montserrat.bold,
    textTransform: "uppercase",
  },
  scroll: { flex: 1, paddingHorizontal: 15 },
  text: {
    color: sett.color.white,
    textAlign: "center",
    fontFamily: sett.font.montserrat.regular,
    fontSize: 15,
    marginVertical: 7,
  },
  img: {
    width: 150,
    height: 150,
    marginHorizontal: "auto",
    marginVertical: 15,
    borderRadius: 150 / 2,
  },
  person: {
    paddingVertical: 15,
    marginHorizontal: 15,
    borderColor: sett.color.white,
    borderStyle: "solid",
    borderBottomWidth: 3,
  },
  field: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  userIcon: {
    width: 131 / 9,
    height: 150 / 9,
    padding: 6,
  },
  mailIcon: {
    width: 150 / 9,
    height: 150 / 9,
    padding: 6,
  },
  coderIcon: {
    width: 188 / 9,
    height: 155 / 9,
    padding: 6,
  },
  designerIcon: {
    width: 150 / 9,
    height: 150 / 9,
    padding: 6,
  },
  fieldText: {
    color: sett.color.white,
    fontFamily: sett.font.montserrat.regular,
    fontSize: 16,
    padding: 6,
  },
  repo: {
    marginVertical: 30,
  },
  githubIcon: {
    width: 145 / 9,
    height: 150 / 9,
    padding: 6,
  },
});
