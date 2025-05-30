import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LoginButton from "../components/LoginButton";

type RootStackParamList = {
  Login: undefined; // Ei parametreja
  Home: undefined; // Ei parametreja
};

export default function CreateAccount() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onClick = () => {
    console.log(username, password);
    console.log("POST ");
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inputcontainer}>
          <Text style={styles.h1}>Create Account</Text>
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
          <LoginButton title={"Create"} onClick={onClick}></LoginButton>
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
    marginBottom: 10,
  },
  link: {
    fontSize: 25,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#2196f3",
  },
});
