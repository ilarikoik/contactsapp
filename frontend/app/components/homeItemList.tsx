import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "../context/themeContext";
import MeetupModal from "./addMeetup";

type listProps = {
  data: any[];
  itemHeight: number;
};

export default function HomeItemList({ data, itemHeight }: listProps) {
  const { theme, setTheme, colors } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [datetime, setDatetime] = useState("");

  const sliceTime = (item: string) => {
    const max = 5;
    if (item && item.length > 1) {
      const shortened = item.slice(0, max);
      return shortened;
    }
    return;
  };

  const handleClick = (date: string, time: string) => {
    if (!time) {
      time = "23:23:23";
    }
    const dt = date + "T" + time; // oikea muoto Javaa varten
    setDatetime(dt);
    setShowModal(true);
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <MeetupModal
            toggleModal={toggleModal}
            showModal={showModal}
            datetime={datetime}
          ></MeetupModal>
          <FlatList
            data={data}
            // ListHeaderComponent={() => (
            //   <Text style={styles.h1}>Find someting to do..</Text>
            // )}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleClick(item.date, item.time)}
                style={[
                  styles.listItem,
                  {
                    shadowColor: colors.text,
                    height: itemHeight,
                    backgroundColor: colors.background,
                    borderColor: "black",
                  },
                ]}
              >
                <ImageBackground
                  source={{
                    uri:
                      item.images && item.images.length > 0
                        ? item.images[
                            Math.floor(Math.random() * item.images.length)
                          ].url
                        : "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
                  }}
                  style={{ width: "100%", height: 200 }}
                  resizeMode="cover"
                ></ImageBackground>
                <View style={styles.namecon}>
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <View style={styles.infocon}>
                  <Text style={{ color: colors.text, fontSize: 15 }}>
                    {item.time === null
                      ? "No starting time mentioned"
                      : sliceTime(item.time)}
                  </Text>
                  <Text style={{ color: colors.text, fontSize: 15 }}>
                    {item.date}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  listItem: {
    margin: 10,
    borderRadius: 7,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 5,
    shadowOpacity: 0.3, // varjon näkyvyys (0–1)
    shadowRadius: 5, // varjon pehmeys
    shadowOffset: {
      // varjon sijainti
      width: 0,
      height: 2,
    },

    // backgroundColor: "red",
  },
  namecon: {
    // backgroundColor: "blue",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  infocon: {
    // backgroundColor: "green",
    padding: 3,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});
