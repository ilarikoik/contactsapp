import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemList from "../../components/itemList";

export default function Contacts() {
  const [data, setData] = useState(Array.from({ length: 50 }, (_, i) => i + 1));

  return (
    <>
      <ItemList data={data} itemHeight={50}></ItemList>
    </>
  );
}

const styles = StyleSheet.create({});
