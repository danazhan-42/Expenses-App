import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OverbudgetScreen from "./OverbudgetScreen";

const Tab = createBottomTabNavigator();

export default function AllExpensesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>AllExpensesScreen</Text>
      <Pressable onPress={() => navigation.navigate("Overbudget Expenses")}>
        <Text>Go to Overbudget</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
