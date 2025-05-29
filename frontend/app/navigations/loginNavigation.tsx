import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../navigation/screens/home";
import Login from "../navigation/screens/login";

const Stack = createNativeStackNavigator();

export default function LoginNavigation() {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!isLoggedIn ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen name="Home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
