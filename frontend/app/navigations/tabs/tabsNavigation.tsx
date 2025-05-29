import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/home";
import Contacts from "./contacts";
import Settings from "./settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//icons
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import Calendar from "./calendar";

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
          component={Calendar}
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
    </NavigationContainer>
  );
}
