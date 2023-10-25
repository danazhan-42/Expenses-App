import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

import { colors } from "../../colors";
import PressableButton from "../components/PressableButton";
import DropDownPicker from "react-native-dropdown-picker";
import { writeToDB, updateToDB } from "../firebase/firebaseHelper";

// Add expense screen is reused as Edit screen by conditional rendering
export default function AddExpenseScreen({ navigation, route }) {
  // Check if in edit mode or add mode
  const isEditMode = route.params && route.params.entry;

  // States for item details
  const [name, setName] = useState(route.params?.entry?.itemName || "");
  const [price, setPrice] = useState(route.params?.entry?.unitPrice || "");
  const [isOverbudget, setIsOverbudget] = useState(
    route.params?.entry?.isOverbudget || false
  );

  // Set the limit 500 as a state variable
  const [budgetLimit, setBudgetLimit] = useState(500);

  // State for checkbox
  const [isChecked, setChecked] = useState(false);

  // Preparing number options for quantity dropdown
  const numbers = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push({ label: i.toString(), value: i });
  }

  // States related to dropdown picker
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(route.params?.entry?.quantity || null);
  const [items, setItems] = useState(numbers);

  // Function to validate input fields
  const isValidateInput = () => {
    if (!name || !price || isNaN(price) || Number(price) < 0 || !value) {
      Alert.alert("Invalid input", "Please check your input values");
      return false;
    }
    return true;
  };

  // Handle submission for adding new expense
  const handleSubmit = () => {
    if (!isValidateInput()) {
      return;
    }

    const newExpense = {
      itemName: name,
      unitPrice: price,
      quantity: value,
      isOverbudget: price * value > budgetLimit,
    };

    writeToDB(newExpense);
    navigation.goBack();
  };

  // Handle cancel action
  const handleCancel = () => {
    setName("");
    setPrice("");
    setValue(null);
    navigation.goBack();
  };

  // Handle updates to existing expense
  const handleUpdate = () => {
    if (!isValidateInput()) {
      return;
    }

    Alert.alert("Important", "Are you sure you want to save the changes?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Yes",
        onPress: () => {
          const updateExpense = {
            itemName: name,
            unitPrice: price,
            quantity: value,
            isOverbudget: price * value > budgetLimit && !isChecked,
          };
          updateToDB(route.params.entry.id, updateExpense);
          navigation.goBack();
        },
      },
    ]);
  };

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
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder=""
        containerStyle={{
          width: "90%",
        }}
      />
      <View style={styles.bottomContainer}>
        {isEditMode && isOverbudget ? (
          <View style={styles.checkboxContainer}>
            <Text style={{ color: colors.primary, fontWeight: "bold" }}>
              This item is marked as overbudget. Select the checkbox if you
              would like to approve it.
            </Text>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              style={styles.checkbox}
            />
          </View>
        ) : null}
        <View style={styles.buttonContainer}>
          <PressableButton
            pressedFunction={handleCancel}
            defaultStyle={styles.buttonDefault}
            pressedStyle={styles.buttonPressed}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </PressableButton>
          <PressableButton
            pressedFunction={isEditMode ? handleUpdate : handleSubmit}
            defaultStyle={styles.buttonDefault}
            pressedStyle={styles.buttonPressed}
          >
            <Text style={styles.buttonText}>Save</Text>
          </PressableButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonDefault: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 5,
    width: 120,
    alignItems: "center",
  },
  buttonPressed: { opacity: 0.8 },
  buttonText: { color: colors.white, fontSize: 16 },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  checkbox: {
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
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
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
  },
});
