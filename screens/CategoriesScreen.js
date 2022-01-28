import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/DummyData.js";
import CustomHeaderButton from "../components/CustomHeaderButtons.js";
import { SafeAreaView } from "react-navigation";

const CategoriesScreen = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  const gridRenderItem = (itemData) => {
    return (
      <SafeAreaView style={styles.grid}>
        <TouchableCmp
          style={{ flex: 1 }}
          onPress={() => {
            props.navigation.navigate({
              routeName: "CategoryMeals",
              params: { categoryId: itemData.item.id },
            });
          }}
        >
          <View style={styles.card}>
            <Text>{itemData.item.title}</Text>
          </View>
        </TouchableCmp>
      </SafeAreaView>
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={gridRenderItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Catgegories",
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
  grid: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 3,
    overflow:
      Platform.OS === "android" && Platform.Version > 20 ? "hidden" : "visible",
  },
  card: {
    flex: 1,
    backgroundColor: "#FD7F7F",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default CategoriesScreen;
