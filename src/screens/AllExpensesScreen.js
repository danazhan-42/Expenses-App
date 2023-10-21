import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import EntriesList from "../components/EntriesList";

export default function AllExpensesScreen({ navigation }) {
  const [expenses, setExpenses] = useState([]);
  return (
    <View style={styles.container}>
      <EntriesList entries={expenses} navigation={navigation} ></EntriesList>
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
