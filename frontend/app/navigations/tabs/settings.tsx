import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import LogoutButton from "../../components/logout";
import { useUser } from "../../context/userContext";
import { useTheme } from "../../context/themeContext";
import { useEvent } from "../../context/eventContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import SwitchButton from "../../components/switchButton";
import { pastEvents, upComingEvents } from "../../utils/upComingAmount";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { EventTypes } from "react-native-gesture-handler/lib/typescript/web/interfaces";

type RootStackParamList = {
  Events: { e: Event[] };
};

export default function Settings() {
  const { user } = useUser();
  const { theme, setTheme, colors } = useTheme();
  const { events } = useEvent();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleComing = () => {
    const upcoming = upComingEvents(events);
    navigation.navigate("Events", { e: upcoming });
  };
  const handlePast = () => {
    const past = pastEvents(events);
    navigation.navigate("Events", { e: past });
  };

  return (
    <>
      <View
        style={[
          styles.con,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <Text style={[styles.h1, { color: colors.text }]}>{user?.appUser}</Text>
        <View style={styles.settingscon}>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.text,
                {
                  color: colors.text,
                },
              ]}
            >
              <View style={styles.iconcon}>
                <MaterialIcons name="dark-mode" size={24} color={colors.text} />
                <SwitchButton></SwitchButton>
                <Entypo name="light-up" size={24} color={colors.text} />
              </View>
            </Text>
            <Text
              onPress={handleComing}
              style={[
                styles.text,
                {
                  color: colors.text,
                },
              ]}
            >
              You have {events ? upComingEvents(events).length : "0 "} upcoming
              events.
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: colors.text,
                },
              ]}
              onPress={handlePast}
            >
              {pastEvents(events).length > 1
                ? ` You had ${pastEvents(events).length} events.`
                : ` You had ${pastEvents(events).length} event.`}
            </Text>
            <LogoutButton />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    width: "100%",
    // backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  settingscon: {
    height: "60%",
    justifyContent: "space-evenly",
    width: "100%",
  },
  textContainer: {
    alignItems: "center",
  },
  iconcon: {
    // height: "50%",
    flexDirection: "row",
  },
  text: {
    width: "90%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    fontSize: 22,
    textAlign: "center",
    padding: 15,
    marginBottom: 20,
    fontWeight: "semibold",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 40,
    fontStyle: "italic",
    textShadowColor: "#ccc",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
