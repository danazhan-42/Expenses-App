import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AddExpenseScreen from "../screens/AddExpenseScreen";
import TabNavigator from "./TabNavigator";
import { AntDesign } from "@expo/vector-icons";
import { deleteToDB } from "../firebase/firebaseHelper";

const Stack = createNativeStackNavigator();

export default function App() {
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
          options={({ route, navigation }) => ({
            title:
              route.params && route.params.entry ? "Edit" : "Add an Expense",
            headerRight: () => (
              <Pressable
                style={{ paddingRight: 10 }}
                onPress={() => {
                  deleteToDB(route.params.entry.id);
                  navigation.goBack();
                }}
              >
                <AntDesign name="delete" size={20} color="white" />
              </Pressable>
            ),
          })}
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
