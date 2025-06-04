import React, { useState } from "react";
import { Switch, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "../context/themeContext";

const SwitchButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleSwitch = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Switch
          trackColor={{ false: "#767577", true: "#ccc" }}
          thumbColor={theme ? "white" : "#ccc"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={theme === "light" ? true : false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SwitchButton;
