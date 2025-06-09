import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../context/themeContext";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { useEvent } from "../../context/eventContext";
import { useState } from "react";
import { MarkedDates } from "react-native-calendars/src/types";
import MeetupModal from "../../components/addMeetup";

export default function CalendarScreen() {
  const { theme, setTheme, colors } = useTheme();
  const { events } = useEvent();
  const [selected, setSelected] = useState<string[]>(
    events.map((item) => item.date.toString())
  );

  // reduce palauttaa yhden objektin jonka sisällä on objekteja
  const markedDates = selected.reduce((acc: any, date: string) => {
    acc[date.toString().substring(0, 10)] = {
      selected: true,
      selectedColor: "#24a1d7", // Tämä määrittelee valitun päivän taustavärin
      disableTouchEvent: true,
      selectedDotColor: "white",
    };
    return acc;
  }, {}); // alkuperänen arvo johon lisätään

  // ei toimi kun markedDates odottaa yhtä objektia jonka sisällä on objekteja
  // tämä palauttaa taulukon
  // const markedDates: any = events.map((item) => {
  //   const obj = {
  //     [item.date.toString().substring(0, 10)]: {
  //       selected: true,
  //       selectedColor: "#24a1d7",
  //       disableTouchEvent: true,
  //       selectedDotColor: "white",
  //     },
  //   };
  //   return obj;
  // });

  return (
    <View
      style={{
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Button
        title="eventit "
        onPress={() => console.log(markedDates)}
      ></Button>
      <View style={styles.container}>
        <Calendar
          current={new Date().toISOString()}
          style={{
            height: 450,
            width: 350,
            borderRadius: 10,
          }}
          theme={{
            selectedDayBackgroundColor: "orange",
            selectedDayTextColor: "white",
            todayTextColor: "#212121",
            todayBackgroundColor: "#ccc",
          }}
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          markedDates={markedDates}
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
