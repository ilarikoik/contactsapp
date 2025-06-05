import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./app/navigations/rootNavigator";
import { AppProviders } from "./app/context/appProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProviders>
        <RootNavigator />
      </AppProviders>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
