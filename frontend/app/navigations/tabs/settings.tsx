import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemList from "../../components/itemList";

export default function Settings() {
  const [data, setData] = useState(Array.from({ length: 3 }, (_, i) => i + 1));

  return (
    <>
      <ItemList data={data} itemHeight={40} />
    </>
  );
}

const styles = StyleSheet.create({});
