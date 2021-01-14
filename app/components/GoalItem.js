import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

function GoalItem(props) {
  return (
    <FlatList
      data={props.allGoals}
      renderItem={(e) => (
        <View style={styles.list}>
          <Text onPress={deleteList}>{e.item}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 20,
    backgroundColor: "pink",
    color: "blue",
  },
});

export default GoalItem;
