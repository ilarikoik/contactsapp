import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUser } from "../context/userContext";
import { useTheme } from "../context/themeContext";
export default function LogoutButton() {
  const { setUser } = useUser();
  const { colors } = useTheme();

  const logout = () => {
    setUser(null);
  };

  return (
    <View style={[styles.con, { backgroundColor: colors.background }]}>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={[styles.buttonText, { color: colors.text }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  button: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
