import React from "react";
import { useSelector } from "react-redux";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

const MealsList = (props) => {
  const favoriteMeals = useSelector((state) => state.mealsReducer.favMeals);
  const renderMealItem = (itemData) => {
    const isFav = favoriteMeals.some((meal) => meal.id === itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealTilte: itemData.item.title,
              mealId: itemData.item.id,
              isFavorite: isFav,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.mealsList}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealsList;
