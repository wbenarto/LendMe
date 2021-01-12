import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Alert,
  SafeAreaView,
  Button,
  Platform,
} from "react-native";

export default function App() {
  console.log("App executed");

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.prompt("Title", "Message", (text) => console.log(text))
        }
      >
        Click Me
      </Button>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
