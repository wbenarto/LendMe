import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  console.log(props.data.item.imageUrl);
  return (
    <View>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={styles.mealRow}>
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: props.data.item.imageUrl }}
            >
              <Text>{props.data.item.title}</Text>
              <Text>{props.data.item.details}</Text>
              <Text>{props.data.item.price}</Text>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
  mealRow: {
    flexDirection: "row",
    height: 200,
    padding: 20,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});

export default MealItem;
