// import React, { useState } from "react";
// import { StyleSheet, View, Button, Text, TextInput } from "react-native";

// function GoalInput(props) {
//   const [newGoal, setNewGoal] = useState("");

//   const goalInputHandler = (event) => {
//     setNewGoal(event);
//     console.log("newGoal = " + newGoal);
//   };

//   return (
//     <View>
//       <Text style={styles.header}>What do you want to achieve in 2021?</Text>

//       <View style={styles.textInput}>
//         <TextInput
//           style={styles.textBox}
//           title="insert your 2021 goals here"
//           onChangeText={goalInputHandler}
//           value={newGoal}
//         ></TextInput>

//         <View style={styles.addDevice}>
//           <Button
//             style={styles.button}
//             title={"+"}
//             onPress={() => props.onPress(newGoal)}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     color: "darkblue",
//     fontSize: 40,
//     fontFamily: "bold",
//   },
//   textBox: {
//     width: "80%",
//     height: 40,
//     backgroundColor: "gray",
//   },
//   textInput: {
//     width: "100%",
//     backgroundColor: "darkgrey",
//     flexDirection: "row",
//   },
//   addDevice: {
//     width: "20%",
//   },
//   button: {
//     width: "100%",
//   },
// });

// export default GoalInput;
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";

function GoalInput(props) {
  const [newGoal, setNewGoal] = useState("");

  const handleChange = (e) => {
    console.log(e);
    setNewGoal(e);
  };

  return (
    <View style={styles.input}>
      <TextInput
        style={styles.textInput}
        onChangeText={handleChange}
        title="Leave your dreams in this box"
      ></TextInput>
      <Button onPress={() => props.onPress(newGoal)} title="+"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
  },
  textInput: {
    padding: 20,
    width: "100%",
    height: 35,
    backgroundColor: "white",
    borderBottomColor: "black",
  },
});

export default GoalInput;
