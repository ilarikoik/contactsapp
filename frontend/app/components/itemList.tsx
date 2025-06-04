import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "../context/themeContext";

type listProps = {
  data: any[];
  itemHeight: number;
};

export default function ItemList({ data, itemHeight }: listProps) {
  const { theme, setTheme, colors } = useTheme();
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={data}
            // ListHeaderComponent={() => (
            //   <Text style={styles.h1}>Find someting to do..</Text>
            // )}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.listItem,
                  {
                    height: itemHeight,
                    backgroundColor: colors.background,
                    borderColor: "black",
                  },
                ]}
              >
                <Text style={{ color: colors.text }}>{item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  listItem: {
    margin: 5,
    borderBottomWidth: 1,
    padding: 5,
  },
});
