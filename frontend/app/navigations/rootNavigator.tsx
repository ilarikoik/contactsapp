import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import TabsNavigation from "./tabs/tabsNavigation";
import { useUser } from "../context/userContext";
import CreateAccount from "../screens/createAccout";
import Events from "../screens/events";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user, setUser } = useUser();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Tabs" component={TabsNavigation} />
            <Stack.Screen name="Events" component={Events} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Create" component={CreateAccount} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
