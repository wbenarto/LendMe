import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome to Webe Sushi"
          component={WelcomeScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
