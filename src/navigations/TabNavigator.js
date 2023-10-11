import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AllExpensesScreen from "./src/screens/AllExpensesScreen";
import OverbudgetScreen from "./src/screens/OverbudgetScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{ activeBackgroundColor: "tomato" }}>
      <Tab.Screen name="All Expenses" component={AllExpensesScreen} />
      <Tab.Screen name="Overbudget" component={OverbudgetScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    activeBackgroundColor: "#483d8b",
  },
});
