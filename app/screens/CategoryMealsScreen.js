import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItem";

function CategoryMealsScreen(props) {
  console.log(props);

  const { categoryId } = props.route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  console.log(displayedMeals);
  console.log(categoryId);
  const { title, type } = props.route.params;
  //   console.log("Give me id : " + categoryId);

  const renderMeals = (itemData) => {
    console.log("render : " + itemData);
    return <MealItem data={itemData} />;
  };
  return (
    <View>
      <FlatList data={displayedMeals} renderItem={renderMeals} />
      <Button
        title={"go back Home"}
        onPress={() => props.navigation.navigate("Welcome to Webe Sushi")}
      />
      <Button
        title={"go to Category"}
        onPress={() => props.navigation.navigate("Categories")}
      />
    </View>
  );
}

export default CategoryMealsScreen;
