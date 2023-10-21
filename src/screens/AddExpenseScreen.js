import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { colors } from "../../colors";

export default function AddExpenseScreen({ navigation }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>item *</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.text}>Unit Price*</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Text style={styles.text}>Quantity*</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  text: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    margin: 5,
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  input: {
    width: "90%",
    color: colors.primary,
    fontSize: 18,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
});
