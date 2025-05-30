import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemList from "../components/itemList";

export default function Home() {
  const [data, setData] = useState(Array.from({ length: 50 }, (_, i) => i + 1));

  return (
    <>
      <ItemList data={data} itemHeight={120}></ItemList>
    </>
  );
}

const styles = StyleSheet.create({});
