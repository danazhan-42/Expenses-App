import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AllExpensesScreen from "../../screens/AllExpensesScreen";
import OverbudgetScreen from "../../screens/OverbudgetScreen";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../colors";

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: "gold",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerRight: () => (
          <Pressable
            style={{ paddingRight: 10 }}
            onPress={() => navigation.navigate("Add Expenses")}
          >
            <AntDesign name="plus" size={20} color="white" />
          </Pressable>
        ),
      }}
    >
      <Tab.Screen
        name="All Expenses"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Overbudget"
        component={OverbudgetScreen}
        options={{
          title: "Overbudget Expenses",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="exclamation"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
