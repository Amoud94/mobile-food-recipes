import { MEALS } from "../data/DummyData";
import { SET_FILTERS, TOGGLE_FAVORITE } from "./mealsAction";

const intialState = {
  meals: MEALS,
  filtredMeals: MEALS,
  favMeals: [],
};

const mealsReducer = (state = intialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favMeals];
        updateFavMeals.splice(existingIndex, 1);
        return { ...state, favMeals: updateFavMeals };
      } else {
        const selectedMeal = state.meals.find(
          (meal) => meal.id === action.mealId
        );
        return { ...state, favMeals: state.favMeals.concat(selectedMeal) };
      }
    case SET_FILTERS:
      const filterSettings = action.filterSettings;
      const filtredMeals = state.meals.filter((meal) => {
        if (!meal.isGlutenFree && filterSettings.glutenFree) {
          return false;
        }
        if (!meal.isVegan && filterSettings.vegan) {
          return false;
        }
        if (!meal.isVegetarian && filterSettings.vegetarian) {
          return false;
        }
        if (!meal.isLactoseFree && filterSettings.lactoseFree) {
          return false;
        }
        return true;
      });
      return { ...state, filtredMeals: filtredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
