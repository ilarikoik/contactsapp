import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import LoginNavigation from "./app/navigations/loginNavigation";
import TabsNavigation from "./app/navigations/tabs/tabsNavigation";
import { useState } from "react";
import { UserProvider } from "./app/context/userContext";
import RootNavigator from "./app/navigations/rootNavigator";

export default function App() {
  return (
    <UserProvider>
      <RootNavigator />
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
});
