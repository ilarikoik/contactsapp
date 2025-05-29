import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>settings</Text>
      <Text>settings</Text>
      <Text>settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue", // tai "transparent", tai poista
    alignItems: "center",
    justifyContent: "center",
  },
});
