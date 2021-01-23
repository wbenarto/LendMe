import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryGridTile = (props) => {
  console.log(props);
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <Text>{props.title}</Text>
      <Text>{props.type}</Text>
      <Text>{props.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    margin: 15,
    height: 150,
    backgroundColor: "#5aa66e",
    borderRadius: 10,
    flex: 1,
    width: 150,
  },
});
export default CategoryGridTile;
