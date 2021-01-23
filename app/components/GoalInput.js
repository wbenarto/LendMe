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
import { View, Text, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {
  const [newGoal, setNewGoal] = useState("");

  const handleChange = (event) => {
    console.log(event);
    setNewGoal(event);
  };
  return (
    <Modal visible={props.visible}>
      <View style={{ marginTop: 50 }}>
        <TextInput
          value={newGoal}
          onChangeText={handleChange}
          title="Insert Goal"
        ></TextInput>
        <Button title="+" onPress={() => props.onPress(newGoal)}></Button>
      </View>
    </Modal>
  );
}

export default GoalInput;
