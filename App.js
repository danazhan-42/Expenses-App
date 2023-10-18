import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AllExpensesScreen from "./src/screens/AllExpensesScreen";
import AddExpenseScreen from "./src/screens/AddExpenseScreen";
import { AntDesign } from "@expo/vector-icons";
import TabNavigator from "./src/navigations/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const entry = {
    description: "Sample entry",
    quantity: 6,
    price: 100,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#483d8b" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Entries"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add Expenses"
          component={AddExpenseScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <EntryItem entry={entry} />
    // </View>
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
