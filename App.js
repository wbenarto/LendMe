// import React, { useState } from "react";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import GoalInput from "./app/components/GoalInput";
// import GoalItem from "./app/components/GoalItem";

// import {
//   useDeviceOrientation,
//   useDimensions,
// } from "@react-native-community/hooks";
// import {
//   StyleSheet,
//   Dimensions,
//   Text,
//   TouchableOpacity,
//   Image,
//   View,
//   Alert,
//   SafeAreaView,
//   Button,
//   Platform,
//   ImageBackground,
//   TextInput,
//   FlatList,
//   Item,
//   PickerIOSComponent,
//   ScrollView,
// } from "react-native";

// export default function App() {
//   const [allGoals, setAllGoals] = useState([]);

//   const handlePress = (newGoal) => {
//     setAllGoals((allGoals) => [
//       ...allGoals,
//       { id: Math.random().toString(), value: newGoal },
//     ]);
//     console.log("all goals" + allGoals);
//   };

//   console.log("App executed");

//   const { landscape } = useDeviceOrientation();

//   return (
//     <View style={styles.container}>
//       <GoalInput onPress={handlePress} />
//       <FlatList
//         keyExtractor={(item, index) => item.id}
//         data={allGoals}
//         renderItem={(itemData) => <GoalItem goal={itemData.item.value} />}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   topBar: {
//     flexDirection: "column",
//     justifyContent: "space-evenly",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
//   },
// });
import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import GoalInput from "./app/components/GoalInput";
import GoalItem from "./app/components/goalItem";

function App() {
  const [allGoals, setNewGoals] = useState([]);

  const handlePress = (value) => {
    console.log("pressed!");
    console.log("handle = " + value);
    setNewGoals((allGoals) => [
      ...allGoals,
      { id: Math.random().toString(), value: value },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is your absolute Goals for 2021?</Text>
      <GoalInput onPress={handlePress} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allGoals}
        renderItem={(itemData) => <GoalItem item={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  text: {
    color: "white",
    fontSize: 35,
  },
});

export default App;
