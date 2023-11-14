import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AddExpenseScreen from "../screens/AddExpenseScreen";
import TabNavigator from "./TabNavigator";
import { AntDesign } from "@expo/vector-icons";
import { deleteToDB } from "../firebase/firebaseHelper";
import PressableButton from "../components/PressableButton";

const Stack = createNativeStackNavigator();

export default function App() {
  // handle the trash icon deletion functionality in Edit Screen
  const handleDelete = ({ route, navigation }) => {
    Alert.alert("Important", "Are you sure you want to delete it?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Yes",
        onPress: () => {
          deleteToDB(route.params.entry.id);
          navigation.goBack();
        },
      },
    ]);
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
          options={({ route, navigation }) => ({
            title:
              route.params && route.params.entry ? "Edit" : "Add an Expense",
            headerRight:
              route.params && route.params.entry
                ? () => (
                    <PressableButton
                      pressedFunction={() =>
                        handleDelete({ route, navigation })
                      }
                      defaultStyle={{ paddingRight: 10 }}
                      pressedStyle={{ opacity: 0.8 }}
                    >
                      <AntDesign name="delete" size={20} color="white" />
                    </PressableButton>
                  )
                : null,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
