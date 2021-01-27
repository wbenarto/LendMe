import React from "react";
import { View, Button, Text, ImageBackground } from "react-native";

function MealDetailsScreen(props) {
  const { mealId } = props.route.params;

  const meal = props.route.params.data;
  console.log(mealId, props.route.params.data);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ height: 200 }}
        source={{ uri: props.route.params.data.imageUrl }}
      ></ImageBackground>
      <Text>Hello this is meal detail screen for {mealId} and props are </Text>
      <Text>{meal.details}</Text>
      <Text>{meal.price}</Text>
    </View>
  );
}

MealDetailsScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: meal.title,
  };
};

export default MealDetailsScreen;
