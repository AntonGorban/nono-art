import React from "react";
import { View, TouchableHighlight, TextInput } from "react-native";
import sett from "../../settings";

export const ColorDesigner = ({
  color = "red",
  onClick = () =>
    console.warn("onClick func not found on ColorDesigner.jsx component"),
  onLongPress = () =>
    console.warn("onLongPress func not found on ColorDesigner.jsx component"),
  onInput = () =>
    console.warn("onInput func not found on ColorDesigner.jsx component"),
  isSelected = false,
}) => (
  <TouchableHighlight
    onPress={onClick}
    onLongPress={onLongPress}
    activeOpacity={1}
    underlayColor={sett.color.dark}
    style={{ ...containerStyle }}
  >
    <View style={wrapStyle}>
      <View style={{ ...containerStyle, borderWidth: isSelected ? 5 : 0 }}>
        <View
          style={{
            ...colorStyle,
            backgroundColor: color,
            borderWidth: isSelected ? 3 : 0,
          }}
        />
      </View>
      <TextInput
        style={{
          ...inputStyle,
          backgroundColor:
            color.length === 4 || color.length === 7
              ? sett.color.white
              : "#e22",
        }}
        value={color}
        placeholder="HEX"
        placeholderTextColor={`${sett.color.white}99`}
        onChangeText={onInput}
        maxLength={7}
        textAlign="center"
        keyboardType="default"
      />
    </View>
  </TouchableHighlight>
);

const containerStyle = {
  height: 75,
  width: 75,
  borderRadius: 75 / 2,
  borderStyle: "solid",
  alignItems: "center",
  justifyContent: "center",
  borderColor: sett.color.dark,
};

const colorStyle = {
  height: 70,
  width: 70,
  borderRadius: 40,
  borderStyle: "solid",
  borderColor: sett.color.white,
  backgroundColor: "red",
  flexDirection: "row",
  alignItems: "flex-end",
  justifyContent: "center",
};

const inputStyle = {
  position: "absolute",
  width: "100%",
  bottom: -1,
  backgroundColor: sett.color.white,
  color: sett.color.dark,
  borderRadius: 15,
  fontFamily: sett.font.montserrat.regular,
  fontSize: 14,
  textAlign: "center",
};

const wrapStyle = {
  position: "relative",
};
