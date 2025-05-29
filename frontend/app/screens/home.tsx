import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Home() {
  const [data, setData] = useState(Array.from({ length: 50 }, (_, i) => i + 1));

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
              <View style={styles.listItem}>
                <Text>{item}</Text>
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
  h1: {
    color: "#2196f3",
    fontWeight: "thin",
    fontSize: 30,
    padding: 15,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: "#fff",
  },
  listItem: {
    height: 100,
    // margin: 5,
    borderBottomWidth: 1,
    padding: 5,
    borderColor: "#ccc",
  },
});
