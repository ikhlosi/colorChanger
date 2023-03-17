import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ColourView from "./src/components/ColourView";

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Text>The background colour is: </Text> */}
    //   <StatusBar style="auto" />
    // </View>
    <ColourView />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
