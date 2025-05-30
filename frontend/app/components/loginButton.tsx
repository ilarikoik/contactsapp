import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import type { DimensionValue } from "react-native";

type ButtonProps = {
  title: string;
  onClick: () => void;
  buttonWidth: DimensionValue;
};

export default function LoginButton({
  title,
  onClick,
  buttonWidth,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.logincon, { width: buttonWidth }]}
      onPress={onClick}
    >
      <Text style={styles.login}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logincon: {
    margin: 5,
    height: 40,
    backgroundColor: "#2196f3",
    // backgroundColor: "green",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    fontSize: 25,
    fontWeight: "ultralight",
    color: "#ffff",
  },
});
