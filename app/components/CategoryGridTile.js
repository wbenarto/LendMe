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
      <TouchableOpacity style={styles.container} onPress={props.onSelect}>
        <ImageBackground
          style={styles.categoryBackground}
          source={{ uri: props.image }}
        >
          <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text>{props.type}</Text>
            <Text>{props.price}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    marginTop: 20,

    height: 200,
    width: "100%",
  },
  container: {
    flex: 1,
    borderRadius: 30,
    width: "100%",
    height: 150,
    shadowColor: "black",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    backgroundColor: "gold",
    width: 100,
    borderRadius: 20,
  },
  categoryBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    borderRadius: 20,
  },
});
export default CategoryGridTile;
