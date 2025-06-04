import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import LogoutButton from "../../components/logout";
import { useUser } from "../../context/userContext";
import { useTheme } from "../../context/themeContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import SwitchButton from "../../components/switchButton";

export default function Settings() {
  const { user } = useUser();
  const { theme, setTheme, colors } = useTheme();

  return (
    <>
      <View
        style={[
          styles.con,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <View style={styles.settingscon}>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.text,
                {
                  color: colors.text,
                },
              ]}
            >
              <View style={styles.iconcon}>
                <MaterialIcons name="dark-mode" size={24} color={colors.text} />
                <SwitchButton></SwitchButton>
                <Entypo name="light-up" size={24} color={colors.text} />
              </View>
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: colors.text,
                },
              ]}
            >
              You have x upcoming events.
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: colors.text,
                },
              ]}
            >
              You had x events.
            </Text>
            <LogoutButton />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    width: "100%",
    // backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  settingscon: {
    height: "60%",
    justifyContent: "space-evenly",
    width: "100%",
  },
  textContainer: {
    alignItems: "center",
  },
  iconcon: {
    // height: "50%",
    flexDirection: "row",
  },
  text: {
    width: "90%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    fontSize: 22,
    textAlign: "center",
    padding: 15,
    marginBottom: 20,
  },
});
