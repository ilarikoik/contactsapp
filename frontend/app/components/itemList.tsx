import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
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
                <View style={styles.namecon}>
                  <Text style={{ color: colors.text, fontSize: 22 }}>
                    {item.firstName + " " + item.lastName}
                  </Text>
                  {/* <Text style={{ color: colors.text, fontSize: 22 }}>
                    {item.lastName}
                  </Text> */}
                </View>
                <View style={styles.infocon}>
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 18,
                    }}
                  >
                    {item.phone}
                  </Text>
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 18,
                    }}
                  >
                    {item.email}
                  </Text>
                </View>
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  namecon: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  infocon: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});
