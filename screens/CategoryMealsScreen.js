import React from "react";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/DummyData.js";
import MealsList from "../components/MealsList";
import { View, Text, StyleSheet } from "react-native";

function CategoryMealsScreen(props) {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(
    (state) => state.mealsReducer.filtredMeals
  );

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length <= 0) {
    return (
      <View style={styles.content}>
        <Text>No meals were found, please check your filter settings</Text>
      </View>
    );
  }

  return <MealsList mealsList={displayedMeals} navigation={props.navigation} />;
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  content:{ 
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    fontSize:25
  }
})

export default CategoryMealsScreen;
