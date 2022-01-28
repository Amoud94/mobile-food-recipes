import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/mealsReducer";

enableScreens();

const mainReducer = combineReducers({
  mealsReducer: mealsReducer,
});

const store = createStore(mainReducer);

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setFontLoaded(true)} />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
