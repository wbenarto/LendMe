import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const CategoryGridTile = (props) => {
  console.log(props);

  return (
    <View style={styles.gridItem}>
      <ImageBackground
        style={styles.categoryBackground}
        source={{ uri: props.image }}
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect}>
          <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text>{props.type}</Text>
            <Text>{props.price}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    borderRadius: 10,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 30,
    height: 150,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
  categoryBackground: {
    width: "100%",
    height: "100%",
  },
});
export default CategoryGridTile;
