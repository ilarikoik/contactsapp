import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import getToken from "../api/fetchToken";

type RootStackParamList = {
  Login: undefined; // Ei parametreja
  Home: undefined; // Ei parametreja
  Create: undefined; // Ei parametreja
  // Profile: { userId: string };
};

export default function Login() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const get = async () => {
      // CORS backendissä
      const token = await getToken();
      console.log(token);
    };
    get();
  }, [username]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.h1}>
          Login or{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Create")}
          >
            Create Account
          </Text>
        </Text>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            returnKeyType="done"
            onChangeText={(text) => setUserName(text)}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            returnKeyType="done"
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
          <TouchableOpacity
            style={styles.logincon}
            // onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={styles.login}
              onPress={() => console.log(username, password)}
            >
              Login
            </Text>
          </TouchableOpacity>
          <Button
            title="HomePage"
            onPress={() => navigation.navigate("Home")}
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: "60%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },

  inputcontainer: {
    alignItems: "center",
    width: "70%",
    padding: 3,
    margin: 15,
  },
  input: {
    margin: 5,
    textAlign: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "17%",
  },
  h1: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  link: {
    fontSize: 25,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#2196f3",
  },
  logincon: {
    margin: 5,
    width: "100%",
    height: "15%",
    backgroundColor: "#2196f3",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    fontSize: 25,
    fontWeight: "ultralight",
    color: "#ffff",
  },
});
