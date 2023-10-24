import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AllExpensesScreen from "../screens/AllExpensesScreen";
import OverbudgetScreen from "../screens/OverbudgetScreen";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../colors";
import PressableButton from "../components/PressableButton";

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.tabBar,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: "bold" },
        headerRight: () => (
          <PressableButton
            pressedFunction={() => navigation.navigate("Add Expenses")}
            defaultStyle={{ paddingRight: 10 }}
            pressedStyle={{ opacity: 0.8 }}
          >
            <AntDesign name="plus" size={20} color={colors.white} />
          </PressableButton>
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
          title: "Overbudget",
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
