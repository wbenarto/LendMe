import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "@react-navigation/stack";
import { Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import WelcomeScreen from "../screens/WelcomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

import FavoritesScreen from "../screens/FavoritesScreen";

import HeaderButton from "../components/HeaderButton";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome to Webe Sushi"
          component={WelcomeScreen}
          options={{
            headerTitle: "Welcome to Webe Sushi!!",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: `Please choose your protein:`,
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={{
            title: ` Selections`,
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
          options={{
            title: "Hau Chek",
            headerStyle: { backgroundColor: "#f2c549" },
            headerTintColor: "white",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="*" iconName="ios-star"></Item>
              </HeaderButtons>
            ),
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: AppNavigator,
  Favorite: FavoritesScreen,
});

export default MealsFavTabNavigator;
