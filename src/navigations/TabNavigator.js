import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AllExpensesScreen from "../../screens/AllExpensesScreen";
import OverbudgetScreen from "../../screens/OverbudgetScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "#483d8b",
        activeTintColor: "gold",
        inactiveBackgroundColor: "#483d8b",
      }}
    >
      <Tab.Screen name="All Expenses" component={AllExpensesScreen} />
      <Tab.Screen name="Overbudget" component={OverbudgetScreen} />
    </Tab.Navigator>
  );
}
