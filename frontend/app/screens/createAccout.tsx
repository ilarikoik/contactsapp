import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { use, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LoginButton from "../components/loginButton";
import postAccount from "../api/postAccount";
import AntDesign from "@expo/vector-icons/AntDesign";

type RootStackParamList = {
  Login: undefined; // Ei parametreja
  Home: undefined; // Ei parametreja
};

export default function CreateAccount() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = async () => {
    if (username && email && password) {
      await postAccount({ username, email, password });
    }
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.h1}>Create Account</Text>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            returnKeyType="done"
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Username"
            returnKeyType="done"
            onChangeText={(text) => setUserName(text)}
          ></TextInput>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            textContentType="password"
            placeholder="Password"
            returnKeyType="done"
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
          <View style={styles.buttoncon}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.icon}
            >
              <AntDesign name="close" size={35} color="white" />
            </TouchableOpacity>
            <LoginButton
              title={"Create"}
              onClick={onClick}
              buttonWidth={"80%"}
            ></LoginButton>
          </View>
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
  textcon: {
    flexDirection: "row",
  },
  inputcontainer: {
    alignItems: "center",
    width: "80%",
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
    height: 40,
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
  buttoncon: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196f3",
    color: "white",
    height: 40,
    width: "18%",
    borderRadius: 5,
  },
});
