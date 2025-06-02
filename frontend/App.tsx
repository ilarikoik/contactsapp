import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./app/navigations/rootNavigator";
import { AppProviders } from "./app/context/appProvider";

export default function App() {
  return (
    <AppProviders>
      <RootNavigator />
    </AppProviders>
  );
}

const styles = StyleSheet.create({});
