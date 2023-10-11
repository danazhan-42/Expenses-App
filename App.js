import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AllExpensesScreen from "./screens/AllExpensesScreen";
import OverbudgetScreen from "./screens/OverbudgetScreen";
import TabNavigator from "./src/navigations/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="All Expenses"
    //     screenOptions={{
    //       headerStyle: { backgroundColor: "#483d8b" },
    //       headerTintColor: "#fff",
    //       headerTitleStyle: { fontWeight: "bold" },
    //     }}
    //   >
    //     {/* Each screen component in your app is provided with the navigation prop automatically. */}
    //     <Stack.Screen
    //       name="All Expenses"
    //       component={AllExpensesScreen}
    //       options={{
    //         title: "All Expenses",
    //       }}
    //     />
    //     <Stack.Screen name="Overbudget Expenses" component={OverbudgetScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
