import React from "react";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButtons";
import { View, Text, StyleSheet } from "react-native";

function FavoriteMealsScreen(props) {
  const favoriteMeals = useSelector((state) => state.mealsReducer.favMeals);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.content}>
        <Text> No favorite meals found. Try to add some </Text>
      </View>
    );
  }

  return <MealsList mealsList={favoriteMeals} navigation={props.navigation} />;
}

FavoriteMealsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your favorite meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteMealsScreen;
