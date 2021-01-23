import React from "react";
import { View, Text, Button } from "react-native";

function CategoryMeals(props) {
  console.log(props);

  const { title, type } = props.route.params;
  //   console.log("Give me id : " + categoryId);
  return (
    <View>
      <Text>All sushi Items on this Category </Text>
      <Text>{title}</Text>
      <Text>Type of sushi: {type}</Text>
      <Button
        title={"go back Home"}
        onPress={() => props.navigation.navigate("Welcome")}
      />
      <Button
        title={"go to Category"}
        onPress={() => props.navigation.navigate("Categories")}
      />
    </View>
  );
}

export default CategoryMeals;
