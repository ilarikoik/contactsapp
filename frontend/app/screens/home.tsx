import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemList from "../components/itemList";
import { useUser } from "../context/userContext";
import { useTheme } from "../context/themeContext";

type userProps = {
  name: string;
};

export default function Home() {
  const [data, setData] = useState(Array.from({ length: 50 }, (_, i) => i + 1));
  const { user } = useUser();
  const { colors } = useTheme();
  return (
    <>
      <View style={[styles.con, { backgroundColor: colors.background }]}>
        <Text style={[styles.h1, { color: colors.text }]}>
          {user ? "Welcome, " + user?.name + "!" : "How you got here??"}
        </Text>
        <ItemList data={data} itemHeight={120}></ItemList>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  h1: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});
