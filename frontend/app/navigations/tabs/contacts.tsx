import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemList from "../../components/itemList";
import { useTheme } from "../../context/themeContext";

export default function Contacts() {
  const [data, setData] = useState(Array.from({ length: 50 }, (_, i) => i + 1));
  const { theme, setTheme, colors } = useTheme();

  return (
    <>
      <View style={[styles.con, { backgroundColor: colors.background }]}>
        <ItemList data={data} itemHeight={50}></ItemList>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
});
