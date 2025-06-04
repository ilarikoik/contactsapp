import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemList from "../../components/itemList";
import { useTheme } from "../../context/themeContext";
import ContactModal from "../../components/addContactModal";

export default function Contacts() {
  const [data, setData] = useState(Array.from({ length: 50 }, (_, i) => i + 1));
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!modalVisible);
  const { theme, setTheme, colors } = useTheme();

  const handleAdd = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <View style={[styles.con, { backgroundColor: colors.background }]}>
        {/* <SafeAreaProvider>
          <SafeAreaView
            style={[styles.con, { backgroundColor: colors.background }]}
          > */}
        <View style={styles.row}>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme === "dark" ? colors.text : "#ccc",
                color: theme === "dark" ? colors.background : "#000",
              },
            ]}
            placeholder="Search"
            placeholderTextColor="#999"
            returnKeyType="done"
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={[styles.addText, { color: "#fff" }]}>Add</Text>
          </TouchableOpacity>
        </View>
        <ContactModal toggleModal={toggleModal} modalVisible={modalVisible} />

        <ItemList data={data} itemHeight={50}></ItemList>
        {/* </SafeAreaView>
        </SafeAreaProvider> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: "center",
  },
  buttoncon: {
    // backgroundColor: "red",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontWeight: "bold",
  },
});
