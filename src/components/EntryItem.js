import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { colors } from "../../colors";
import PressableButton from "./PressableButton";

export default function EntryItem({ entry, navigation }) {
  return (
    <PressableButton
      pressedStyle={styles.pressed}
      defaultStyle={styles.container}
      pressedFunction={() =>
        navigation.navigate("Add Expenses", { entry: entry })
      }
    >
      <Text style={styles.text}>{entry.itemName}</Text>
      <View style={styles.expenseContainer}>
        {entry.isOverbudget && (
          <Ionicons name="warning" size={28} color="gold" />
        )}
        <View style={styles.expense}>
          <Text>
            {entry.quantity} * {entry.unitPrice}
          </Text>
        </View>
      </View>
    </PressableButton>
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
    color: colors.white,
    fontWeight: "bold",
  },
  expenseContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  expense: {
    backgroundColor: colors.white,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5,
  },
});
