import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Contacts() {
  return (
    <View style={styles.container}>
      <Text>contacts</Text>
      <Text>contacts</Text>
      <Text>contacts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red", // tai "transparent", tai poista
    alignItems: "center",
    justifyContent: "center",
  },
});
