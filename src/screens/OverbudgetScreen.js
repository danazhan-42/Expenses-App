import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function OverbudgetScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>OverbudgetScreen</Text>
      <Pressable onPress={() => navigation.push("Overbudget Expenses")}>
        <Text>Go to Overbudget again</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("All Expenses")}>
        <Text>Go to All Expenses</Text>
      </Pressable>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </Pressable>
      <Pressable onPress={() => navigation.popToTop()}>
        <Text>Go back to first screen in stack</Text>
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
