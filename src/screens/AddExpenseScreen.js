import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { colors } from "../../colors";
import PressableButton from "../components/PressableButton";
import DropDownPicker from "react-native-dropdown-picker";
import { writeToDB, updateToDB } from "../firebase/firebaseHelper";
import Checkbox from "expo-checkbox";

export default function AddExpenseScreen({ navigation, route }) {
  const [name, setName] = useState(route.params?.entry?.itemName || "");
  const [price, setPrice] = useState(route.params?.entry?.unitPrice || "");
  const [isChecked, setChecked] = useState(false);
  const isEditMode = route.params && route.params.entry;

  const numbers = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push({ label: i.toString(), value: i });
  }
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(route.params?.entry?.quantity || null);
  const [items, setItems] = useState(numbers);

  const handleSubmit = () => {
    if (!name || !price || isNaN(price) || Number(price) < 0 || !value) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }

    const newExpense = {
      itemName: name,
      unitPrice: price,
      quantity: value,
    };

    writeToDB(newExpense);
    navigation.goBack();
  };

  const handleCancel = () => {
    setName("");
    setPrice("");
    setValue(null);
    navigation.goBack();
  };

  const handleUpdate = () => {
    if (!name || !price || isNaN(price) || Number(price) < 0 || !value) {
      Alert.alert("Invalid input", "Please check your input values");
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
        containerStyle={{
          width: "90%",
        }}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.checkboxContainer}>
          <Text>
            This item is marked as overbudget. Select the checkbox if you would
            like to approve it
          </Text>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            style={styles.checkbox}
          />
        </View>
        <View style={styles.button}>
          <PressableButton pressedFunction={handleCancel}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Cancel</Text>
          </PressableButton>
          <PressableButton
            pressedFunction={isEditMode ? handleUpdate : handleSubmit}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Save</Text>
          </PressableButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "tomato",
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
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
  },
});
