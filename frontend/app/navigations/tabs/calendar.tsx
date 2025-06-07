import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../context/themeContext";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default function CalendarScreen() {
  const { theme, setTheme, colors } = useTheme();
  return (
    // <View style={[styles.container, { backgroundColor: colors.background }]}>
    <View
      style={{
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <Calendar
          current={"2025-06-15"}
          style={{
            height: 450,
            width: 350,
            borderRadius: 10,
          }}
          theme={{}}
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // hae meetupista päivämäärä(t) käyttäjän id perusteella
          markedDates={
            {
              // "2025-06-01": {
              //   selected: true,
              //   marked: true,
              //   selectedColor: "gold",
              // },
              // "2025-06-05": {
              //   selected: true,
              //   marked: true,
              //   selectedColor: "blue",
              // },
              // "2025-06-10": {
              //   selected: true,
              //   marked: true,
              //   selectedColor: "gold",
              // },
            }
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#212121",
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
