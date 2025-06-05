import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "../context/themeContext";

type listProps = {
  data: any[];
  itemHeight: number;
};

export default function HomeItemList({ data, itemHeight }: listProps) {
  const { theme, setTheme, colors } = useTheme();

  const sliceTime = (item: string) => {
    const max = 5;
    if (item && item.length > 1) {
      const shortened = item.slice(0, max);
      return shortened;
    }
    return;
  };

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
                <ImageBackground
                  source={{
                    uri:
                      item.images && item.images.length > 0
                        ? item.images[
                            Math.floor(Math.random() * item.images.length)
                          ].url
                        : "https://via.placeholder.com/150",
                  }}
                  style={{ width: "100%", height: 200 }}
                  resizeMode="cover"
                ></ImageBackground>
                <View style={styles.namecon}>
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <View style={styles.infocon}>
                  <Text style={{ color: colors.text, fontSize: 15 }}>
                    {sliceTime(item.time)}
                  </Text>
                  <Text style={{ color: colors.text, fontSize: 15 }}>
                    {item.date}
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
    alignItems: "center",
    justifyContent: "space-around",

    // backgroundColor: "red",
  },
  namecon: {
    // backgroundColor: "blue",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  infocon: {
    // backgroundColor: "green",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});
