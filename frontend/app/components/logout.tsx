import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUser } from "../context/userContext";

export default function LogoutButton() {
  const { setUser } = useUser();

  const logout = () => {
    setUser(null);
  };

  return (
    <View style={styles.con}>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>{"Logout"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#f44336", // punainen sävy
    width: "90%",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
