import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Login from "../screens/login";
import CreateAccount from "../screens/createAccout";

const Stack = createNativeStackNavigator();

interface user {
  isLoggedIn: boolean;
}
export default function LoginNavigation({ isLoggedIn }: user) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Login"}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
