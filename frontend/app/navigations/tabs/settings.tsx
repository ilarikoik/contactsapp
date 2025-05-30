import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemList from "../../components/itemList";
import LogoutButton from "../../components/logout";
import { useUser } from "../../context/userContext";

export default function Settings() {
  const { user } = useUser();
  const [data, setData] = useState(Array.from({ length: 3 }, (_, i) => i + 1));

  return (
    <>
      <LogoutButton />
      <ItemList data={data} itemHeight={40} />
    </>
  );
}

const styles = StyleSheet.create({});
