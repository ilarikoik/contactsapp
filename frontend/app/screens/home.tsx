import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemList from "../components/itemList";
import { useUser } from "../context/userContext";

type userProps = {
  name: string;
};

export default function Home() {
  const [data, setData] = useState(Array.from({ length: 50 }, (_, i) => i + 1));
  const { user } = useUser();

  return (
    <>
      <Text style={styles.h1}>
        {user ? "Welcome, " + user?.name + "!" : "How you got here??"}
      </Text>
      <ItemList data={data} itemHeight={120}></ItemList>
    </>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    color: "#2196f3",
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});
