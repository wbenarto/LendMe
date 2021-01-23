import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet, Button } from "react-native";
import GoalInput from "./app/components/GoalInput";
import GoalItem from "./app/components/GoalItem";

import AppNavigator from "./app/navigation/AppNavigator";

function App() {
  return <AppNavigator />;
}

export default App;
