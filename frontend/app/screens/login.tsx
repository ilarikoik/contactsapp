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
import getToken from "../api/get/fetchToken";
import LoginButton from "../components/loginButton";
import login from "../api/post/login";
import { useUser } from "../context/userContext";
import getEvents from "../api/get/getUserEvents";
import { useEvent } from "../context/eventContext";

type RootStackParamList = {
  Login: undefined; // Ei parametreja
  Home: undefined; // Ei parametreja
  Create: undefined; // Ei parametreja
  Tabs: {
    screen?: keyof TabParamList;
    params?: any;
  };
  // Profile: { userId: string };
};

type TabParamList = {
  Home: undefined;
  Calendar: undefined;
  Contacts: undefined;
  Settings: undefined;
};

export default function Login() {
  const { user, setUser } = useUser();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [email, setEmail] = useState("ile");
  const [password, setPassword] = useState("ile");

  const onClick = async () => {
    try {
      const res = await login({ email, password });
      if (res.id) {
        setUser({
          id: res.id,
          appUser: res.appUser || "thjä",
          email: res.email || "",
        });
        // const events = await getEvents(res.id);
        // setEvents(events);
      }
    } catch (e) {
      Error("Login error: ");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.textcon}>
          <Text style={styles.h1}>{"Login or "}</Text>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Create")}
          >
            {"Create Account"}
          </Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            returnKeyType="done"
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            returnKeyType="done"
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
          <LoginButton title={"Login"} onClick={onClick} buttonWidth={"100%"} />
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
});
