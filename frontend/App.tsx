import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginNavigation from "./app/navigations/loginNavigation";
import TabsNavigation from "./app/navigations/tabs/tabsNavigation";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <TabsNavigation />
  ) : (
    <LoginNavigation isLoggedIn={isLoggedIn} />
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
