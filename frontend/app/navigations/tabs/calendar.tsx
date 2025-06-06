import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../context/themeContext";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default function CalendarScreen() {
  const { theme, setTheme, colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Calendar
        style={{
          // borderWidth: 1,
          // borderColor: colors.text,
          height: "auto",
          width: "auto",
          backgroundColor: colors.background,
        }}
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        markedDates={{
          "2025-06-01": {
            selected: true,
            marked: true,
            selectedColor: colors.text,
          },
          "2025-06-05": { selected: true, marked: true, selectedColor: "blue" },
          "2025-06-10": { selected: true, marked: true, selectedColor: "gold" },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
