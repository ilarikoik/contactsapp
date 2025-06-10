import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "../context/themeContext";
import postContact from "../api/post/postContact";
import { useUser } from "../context/userContext";
import getContacts from "../api/get/getContacts";
import postMeetup from "../api/post/postMeetup";
import { useEvent } from "../context/eventContext";

type ModalProps = {
  toggleModal: () => void;
  showModal: boolean;
  datetime: string;
  title: string;
};

/**
 * backend odottaa tämmöstä
 */
type MeetupType = {
  date: string;
  location: string;
  todo: string;
  info: string;
  creator: number; // backendi odottaa objektia joten POST pyynnössä tee
  participants: Participants[];
};

/**
 * backend odottaa listaa objekteista
 */
type Participants = {
  id: number;
};

/**
 * mitä tietokannasta tulee contacteihin
 */
type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export const MeetupModal = ({
  toggleModal,
  showModal,
  datetime,
  title,
}: ModalProps) => {
  const { user } = useUser();
  const [date, setDate] = useState(datetime);
  const [location, setLocation] = useState("");
  const [todo, setTodo] = useState(title);
  const [info, setInfo] = useState("");
  const [creator, setCreator] = useState(user?.id);
  const [participants, setParticipants] = useState<Participants[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const { theme, colors } = useTheme();
  const { toggleRefresh, refreshToggle } = useEvent();

  const saveMeetup = async () => {
    if (creator && date) {
      const meetup: MeetupType = {
        date,
        location,
        todo,
        info,
        creator,
        participants,
      };
      await postMeetup(meetup);
      console.log(meetup);
    }
    toggleModal();
    setParticipants([]);
    toggleRefresh();
  };

  const handleModal = () => {
    toggleModal();
  };

  useEffect(() => {
    const get = async () => {
      setDate(datetime);
      setTodo(title);
      if (user) {
        const res = await getContacts(user?.id);
        let sorted = res.sort((a: any, b: any) =>
          a.firstName.localeCompare(b.firstName)
        );
        setContacts(sorted);
      }
    };
    get();
  }, [datetime, title]);

  const addToParcitipants = (id: number) => {
    setParticipants([...participants, { id }]);
    const filteredContacts = contacts.filter((item) => item.id !== id);
    console.log(participants);
    setContacts(filteredContacts);
    setSearch("");
  };

  const filteredContacts = contacts.filter(
    (item) =>
      item.firstName.toLowerCase().includes(search.toLowerCase()) ||
      item.lastName.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      style={styles.centeredView}
    >
      <View style={styles.centeredView}>
        <View
          style={[
            styles.modalView,
            { backgroundColor: theme === "dark" ? "#212121" : "#fff" },
          ]}
        >
          <View style={styles.row}>
            <Text
              style={[
                styles.label,
                { color: colors.text, textAlign: "left", width: "100%" },
              ]}
            >
              Event Staring Date & Time:
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme === "dark" ? colors.text : "#ccc",
                  color: theme === "dark" ? colors.background : "#000",
                },
              ]}
              placeholderTextColor="#999"
              returnKeyType="done"
              value={date}
              onChangeText={(text) => setDate(text)}
            />
            <Text
              style={[
                styles.label,
                { color: colors.text, textAlign: "left", width: "100%" },
              ]}
            >
              Todo:
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme === "dark" ? colors.text : "#ccc",
                  color: theme === "dark" ? colors.background : "#000",
                },
              ]}
              value={todo}
              placeholderTextColor="#999"
              returnKeyType="done"
              onChangeText={(text) => setTodo(text)}
            />
            <Text
              style={[
                styles.label,
                { color: colors.text, textAlign: "left", width: "100%" },
              ]}
            >
              Meetup Place:
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme === "dark" ? colors.text : "#ccc",
                  color: theme === "dark" ? colors.background : "#000",
                },
              ]}
              placeholder={`"K-Supermarket Tripla"`}
              placeholderTextColor="#999"
              returnKeyType="done"
              onChangeText={(text) => setLocation(text)}
            />

            <Text
              style={[
                styles.label,
                { color: colors.text, textAlign: "left", width: "100%" },
              ]}
            >
              Additional Info:
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme === "dark" ? colors.text : "#ccc",
                  color: theme === "dark" ? colors.background : "#000",
                },
              ]}
              placeholderTextColor="#999"
              placeholder={`"Lets meet at store 18.00"`}
              returnKeyType="done"
              onChangeText={(text) => setInfo(text)}
            />
            <Text
              style={[
                styles.label,
                { color: colors.text, textAlign: "left", width: "100%" },
              ]}
            >
              Participants:
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme === "dark" ? colors.text : "#ccc",
                  color: theme === "dark" ? colors.background : "#000",
                },
              ]}
              placeholder={`Search`}
              placeholderTextColor="#999"
              returnKeyType="done"
              onChangeText={(text) => setSearch(text)}
              value={search}
            />
            <View style={styles.contactscon}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {filteredContacts.map((contact, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => addToParcitipants(contact.id)}
                    style={[
                      styles.categorybutton,
                      {
                        // backgroundColor: colors.background,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.label,
                        {
                          color: colors.text,
                        },
                      ]}
                    >
                      {contact.firstName + " " + contact.lastName}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            {/* {contacts &&
              contacts?.map((item, i) => (
                <View key={i} style={{ padding: 8 }}>
                  <Text onPress={() => addToParcitipants(item.id)}>
                    {item.firstName}
                  </Text>
                </View>
              ))} */}

            {/* <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme === "dark" ? colors.text : "#ccc",
                  color: theme === "dark" ? colors.background : "#000",
                },
              ]}
              placeholderTextColor="#999"
              returnKeyType="done"
              // onChangeText={(text) => setPaticipantsIds(parseInt(text))}
            /> */}
          </View>
          <View style={styles.buttoncon}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleModal}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonSave]}
              onPress={saveMeetup}
            >
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalView: {
    // backgroundColor: "red",
    // backgroundColor: "white",
    height: "auto",
    width: "85%",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 12,
  },

  buttoncon: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-evenly",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "49%",
    borderRadius: 10,
    padding: 10,
    elevation: 12,
  },
  buttonOpen: {
    // backgroundColor: "#F194FF",
    // backgroundColor: "blue",
  },
  buttonClose: {
    backgroundColor: "#fe4833",
  },
  buttonSave: {
    backgroundColor: "#1ed760",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
  },
  row: {
    height: "70%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    margin: 10,
    height: 40,
    padding: 4,
    borderRadius: 6,
    width: "100%",
    elevation: 5,
  },
  contactscon: {
    // backgroundColor: "red",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  categorybutton: {
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginLeft: 7,
  },
});

export default MeetupModal;
