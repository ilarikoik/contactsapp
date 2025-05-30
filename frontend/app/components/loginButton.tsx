import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export default function LoginButton({ title, onClick }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.logincon} onPress={onClick}>
      <Text style={styles.login}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logincon: {
    margin: 5,
    width: "100%",
    height: "15%",
    backgroundColor: "#2196f3",
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
