import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { colors } from "../../colors";

export default function EntryItem({ item }) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{item.description}</Text>
      <View style={styles.expenseContainer}>
        {item.quantity * item.price > 500 && (
          <Ionicons name="warning" size={28} color="gold" />
        )}
        <View style={styles.expense}>
          <Text>
            {item.quantity} * {item.price}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
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
  },
});
