import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemList from "../components/itemList";
import { useUser } from "../context/userContext";
import { useTheme } from "../context/themeContext";
import getContacts from "../api/get/getContacts";
import getToken from "../api/get/fetchToken";
import postMeetup from "../api/post/postMeetup";
import { ScrollView } from "react-native-gesture-handler";
import HomeItemList from "../components/homeItemList";
import getTicketmaster from "../api/get/getTicketMaster";
import getBoredAPi from "../api/get/getBoredApi";
import { formatBoredData } from "../utils/formatters";

export default function Home() {
  const [data, setData] = useState<any>();

  const { user } = useUser();
  const { colors, theme } = useTheme();
  const [searchBar, setSearchBar] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const get = async () => {
      if (user?.id) {
      }
    };
    get();
  }, []);

  const categories = [
    {
      label: "Restaurants",
      // onPress: fetchRestaurants,
      active: false,
    },
    {
      label: "Bars",
      // onPress: fetchBars,
    },
    {
      label: "Events",
      onPress: getTicketmaster,
      active: false,
    },
    {
      label: "Games",
      // onPress: fetchGames,
    },
    {
      label: "Parks & Grill",
      // onPress: fetchParksAndGrill,
    },
    {
      label: "Random Activity",
      onPress: getBoredAPi,
      active: false,
    },
  ];

  const filtered = data?.filter((item: any) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  const handleBack = () => {
    setSearchBar(false);
    setSearch("");
  };

  const handleCategory = async (category: any) => {
    setSearchBar(true);
    const result = await category.onPress("FI");
    setData(result);
  };
  return (
    <>
      <View style={[styles.con, { backgroundColor: colors.background }]}>
        {/* <Button
          title="test ticket"
          onPress={async () => console.log(await getTicketmaster("FI"))}
        /> */}
        <View style={styles.categorycon}>
          {searchBar ? (
            <>
              <View style={styles.searchcon}>
                <TouchableOpacity style={styles.addButton} onPress={handleBack}>
                  <Text style={[styles.addText, { color: "#fff" }]}>Back</Text>
                </TouchableOpacity>
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
              </View>
            </>
          ) : (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.categorybutton, { borderColor: colors.text }]}
                  onPress={() => handleCategory(category)}
                >
                  <Text style={[styles.text, { color: colors.text }]}>
                    {category.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
        {/* <Text style={[styles.h1, { color: colors.text }]}>
          {user ? "Welcome, " + user?.appUser + "!" : "How you got here??"}
        </Text> */}
        <HomeItemList data={filtered} itemHeight={280}></HomeItemList>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  h1: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  categorycon: {
    width: "100%",
    alignItems: "flex-start",
    padding: 5,
    marginBottom: 10,
    // backgroundColor: "#fff",
  },
  categorybutton: {
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    // height: "auto",
    height: 40,
    width: "auto",
    borderWidth: 1,
    padding: 8,
    borderRadius: 7,
    marginLeft: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "semibold",
  },
  searchcon: {
    flexDirection: "row",
    padding: 5,
    width: "100%",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  input: {
    width: "78%",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  addButton: {
    backgroundColor: "tomato",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: "18%",
  },
  addText: {
    fontWeight: "bold",
  },
});
