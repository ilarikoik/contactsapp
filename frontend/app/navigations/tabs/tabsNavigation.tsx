import "react-native-gesture-handler";
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../screens/home";
import Contacts from "./contacts";
import Settings from "./settings";
//icons
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useUser } from "../../context/userContext";
import { useEffect } from "react";
import { Header } from "react-native/Libraries/NewAppScreen";
import { useTheme } from "../../context/themeContext";
import { View } from "react-native";
import CalendarScreen from "./calendar";

const Tab = createBottomTabNavigator();

type RootStackParamList = {
  Login: undefined; // Ei parametreja
  Settings: undefined; // Ei parametreja
  Calendar: undefined; // Ei parametreja
};

export default function TabsNavigation() {
  const { user } = useUser();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { colors } = useTheme();

  useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
  }, [user]);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        tabBarActiveTintColor: colors.text, // Aktiivisen tabin teksti/ikoni
        tabBarInactiveTintColor: colors.text, // Epäaktiivisen tabin teksti/ikoni
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: colors.background,
              flex: 1,
            }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: "Contacts",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user-o" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
