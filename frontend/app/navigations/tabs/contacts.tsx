import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
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
import { useUser } from "../../context/userContext";
import getContacts from "../../api/getContacts";

export default function Contacts() {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!modalVisible);
  const { theme, setTheme, colors } = useTheme();
  const { user } = useUser();
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    const get = async () => {
      if (user?.id) {
        const res = await getContacts(user?.id);
        setData(res);
      }
    };
    get();
  }, []);

  const filtered = data.filter(
    (item: any) =>
      item.firstName?.toLowerCase().includes(search.toLowerCase()) ||
      item.lastName?.toLowerCase().includes(search.toLowerCase())
  );

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
            onChangeText={(text) => setSearch(text)}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={[styles.addText, { color: "#fff" }]}>Add</Text>
          </TouchableOpacity>
        </View>
        <ContactModal toggleModal={toggleModal} modalVisible={modalVisible} />

        <ItemList data={filtered} itemHeight={60}></ItemList>
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
