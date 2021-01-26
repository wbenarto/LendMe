import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet, Button } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";

import AppNavigator from "./app/navigation/AppNavigator";

function App() {
  return <AppNavigator />;
}

export default App;
