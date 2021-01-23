import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMeals";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMeals}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
