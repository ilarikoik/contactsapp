import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type RootStackParamList = {
  Login: undefined; // Ei parametreja
  Home: undefined; // Ei parametreja
};

export default function CreateAccount() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>Create account</Text>
      <TextInput placeholder="Email"></TextInput>
      <TextInput placeholder="Username"></TextInput>
      <TextInput placeholder="Password"></TextInput>
      <Button title="OK" onPress={() => navigation.navigate("Login")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {},
});
