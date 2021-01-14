// import React from "react";
// import { StyleSheet, FlatList, View, Text } from "react-native";

// function GoalItem(props) {
//   return (
//     <View style={styles.list}>
//       <Text>{props.goal}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   list: {
//     padding: 20,
//     backgroundColor: "pink",
//     color: "blue",
//   },
// });

// export default GoalItem;
import React from "react";
import { View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View>
      <Text>{props.item}</Text>
    </View>
  );
}

export default GoalItem;
