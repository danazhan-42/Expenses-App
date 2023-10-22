import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { colors } from "../../colors";

export default function EntryItem({ entry, navigation }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={() => navigation.navigate("Add Expenses", { entry: entry })}
    >
      <Text style={styles.text}>{entry.itemName}</Text>
      <View style={styles.expenseContainer}>
        {entry.quantity * entry.unitPrice > 500 && (
          <Ionicons name="warning" size={28} color="gold" />
        )}
        <View style={styles.expense}>
          <Text>
            {entry.quantity} * {entry.unitPrice}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  expenseContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  expense: {
    backgroundColor: "white",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5,
  },
});
