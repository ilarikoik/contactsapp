import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemList from "../../components/itemList";
import LogoutButton from "../../components/logout";
import { useUser } from "../../context/userContext";

export default function Settings() {
  const { user } = useUser();

  return (
    <>
      <View style={styles.con}>
        <View style={styles.settingscon}>
          <Text style={styles.text}>{user ? "Theme toggle Text" : "Dark"}</Text>
          <Text style={styles.text}>You have x upcoming events.</Text>
          <Text style={styles.text}>You had x events.</Text>
          <LogoutButton />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  settingscon: {
    height: "60%",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 22,
    textAlign: "center",
    borderBottomColor: "#ccc",
    margin: 10,
  },
});
