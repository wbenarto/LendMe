import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  View,
  Alert,
  SafeAreaView,
  Button,
  Platform,
  ImageBackground,
} from "react-native";

export default function App() {
  console.log("App executed");
  console.log(useDimensions());

  const { landscape } = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "baseline",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
  },
});
