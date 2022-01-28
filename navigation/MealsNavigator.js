import React from "react";
import { Modal, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailsScreen from "../screens/MealDetailsScreen";
import FavoriteMealsScreen from "../screens/FavoriteMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FilterScreen from "../screens/FiltersScreen";

const mealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#FD7F7F",
      },
      headerTintColor: "white",
    },
  }
);

const favoritMealsNav = createStackNavigator(
  {
    Favorite: FavoriteMealsScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#FD7F7F",
      },
      headerTintColor: "white",
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: mealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={23} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Favorite: {
    screen: favoritMealsNav,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={23} color={tabInfo.tintColor} />;
      },
      tabBarColor: "orange",
    },
  },
};

const mealsNavigatorBottom =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        shifting: true,
        barStyle: {
          backgroundColor: "white",
        },
      })
    : createBottomTabNavigator(tabScreenConfig);

const FilterNavigator = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#FD7F7F",
      },
      headerTintColor: "white",
    },
  }
);

const mainNavigator = createDrawerNavigator({
  Favorite: {
    screen: mealsNavigatorBottom,
    navigationOptions: {
      drawerLabel: "Favorite meals",
    },
  },
  Filters: FilterNavigator,
}, {
  contentOptions:{
    activeTintColor:'orange'
  }
});

export default createAppContainer(mainNavigator);
