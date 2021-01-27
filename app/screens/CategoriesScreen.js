import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen = (props) => {
  //   const [data, setData] = useState(CATEGORIES);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        style={{ width: "100%", flexDirection: "row" }}
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      ></CategoryGridTile>
    );
  };

  return (
    <FlatList
      style={styles.screen}
      numColumns={1}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = {
  title: "Sushi Categories",
  headerTitle: "Sushi Categories",
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
};

const styles = StyleSheet.create({
  screen: {},
});

export default CategoriesScreen;
