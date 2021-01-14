import React, { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import GoalInput from "./app/components/GoalInput";
import GoalItem from "./app/components/GoalItem";

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
  TextInput,
  FlatList,
  Item,
  PickerIOSComponent,
  ScrollView,
} from "react-native";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);

  console.log("App executed");

  const { landscape } = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <GoalInput />
      <GoalItem data={allGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
  },
});
