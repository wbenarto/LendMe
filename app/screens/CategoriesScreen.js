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
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
            categoryType: itemData.item.type,
            categoryPrice: itemData.item.price,
          });
        }}
      ></CategoryGridTile>
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
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
  screen: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
});

export default CategoriesScreen;
