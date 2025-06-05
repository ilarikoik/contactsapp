import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "../context/themeContext";
import postContact from "../api/post/postContact";
import { useUser } from "../context/userContext";

type ModalProps = {
  toggleModal: () => void;
  modalVisible: boolean;
};

type ContactType = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  appUser: {
    userId: number;
  };
};

export const ContactModal = ({ toggleModal, modalVisible }: ModalProps) => {
  const { user } = useUser();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState(user?.id); // contextin avulla käyttäjä id

  const saveContact = async () => {
    //pakolliset
    if (firstname && userId) {
      const contact: ContactType = {
        firstname,
        lastname,
        email,
        phone,
        appUser: {
          userId,
        },
      };
      console.log(contact);
      const res = await postContact(contact);
      console.log("postaus frontti");
      console.log(res);
    }
    // await funktio jolle annetaan objekti
    toggleModal();
  };

  const { theme, colors } = useTheme();

  const handleModal = () => {
    toggleModal();
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      style={styles.centeredView}
      //   onRequestClose={() => {
      //     Alert.alert("Modal has been closed.");
      //     setModalVisible(!modalVisible);
      //   }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.row}>
            <Text style={{ textAlign: "left", width: "100%" }}>Etunimi:</Text>
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
              onChangeText={(text) => setFirstname(text)}
            />
            <Text style={{ textAlign: "left", width: "100%" }}>Sukunimi:</Text>
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
              onChangeText={(text) => setLastname(text)}
            />
            <Text style={{ textAlign: "left", width: "100%" }}>
              Sähköposti:
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
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={{ textAlign: "left", width: "100%" }}>
              Puhelinnumero:
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
              onChangeText={(text) => setPhone(text)}
            />
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
              onPress={saveContact}
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
    height: "60%",
    width: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttoncon: {
    flexDirection: "row",
    width: 300,
    height: 50,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "49%",
    height: 50,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
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
  row: {
    height: "70%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    margin: 10,
    height: 50,
    padding: 4,
    borderRadius: 6,
    width: "100%",
  },
});

export default ContactModal;
