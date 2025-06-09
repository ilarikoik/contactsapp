import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Button,
} from "react-native";
import { useTheme } from "../context/themeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEvent } from "../context/eventContext";
import { upComingEvents } from "../utils/upComingAmount";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

export type RootStackParamList = {
  Events: { e: Event[] };
};

export default function Events() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "Events">>();
  const { e } = route.params;
  const [title, setTitle] = useState("Tapahtumasi");

  const renderItem = ({ item }: any) => {
    const pvm = new Date();
    setTitle(
      new Date(item.date) >= pvm ? "Tulevat tapahtumasi" : "Menneet tapahtumasi"
    );
    return (
      <TouchableOpacity
        style={[
          styles.eventCard,
          {
            backgroundColor: colors.background,
            shadowColor: colors.text,
            marginBottom: 20,
            shadowOpacity: 0.3, // varjon näkyvyys (0–1)
            shadowRadius: 5, // varjon pehmeys
            shadowOffset: {
              // varjon sijainti
              width: 0,
              height: 2,
            },
          },
        ]}
      >
        <Text style={[styles.title, { color: colors.text }]}>{item.todo}</Text>
        <Text style={[styles.meta, { color: colors.text }]}>
          📍 {item.location} {"(" + item.info + ")"}
        </Text>
        <Text style={[styles.meta, { color: colors.text }]}>
          🗓️ {item.date}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaProvider
      style={{ padding: 5, marginTop: 10, backgroundColor: colors.background }}
    >
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBackBtn}
        >
          <Text style={styles.goBackText}>← Back</Text>
        </TouchableOpacity>
        <FlatList
          data={e}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListHeaderComponent={() => (
            <Text style={[styles.header, { color: colors.text }]}>{title}</Text>
          )}
          contentContainerStyle={styles.listContent}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  eventCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  meta: {
    fontSize: 14,
    marginTop: 4,
  },
  goBackBtn: {
    padding: 12,
    margin: 12,
    borderRadius: 8,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
  },
  goBackText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
