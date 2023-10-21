import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { colors } from "../../colors";
import PressableButton from "../components/PressableButton";
import DropDownPicker from "react-native-dropdown-picker";

export default function AddExpenseScreen({ navigation }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const numbers = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push({ label: i.toString(), value: i });
  }
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(numbers);

  const handleSubmit = (data) => {
    if (!name || !price || isNaN(price) || Number(price) < 0 || !value) {
      Alert.alert("Invalid input", "Please check your input values");
    }
  };
  const handleCancel = () => {
    setName("");
    setPrice("");
    setValue(null);
    navigation.goBack();
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
      {/* <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      /> */}
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
        <View style={styles.button}>
          <PressableButton onPress={handleCancel}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Cancel</Text>
          </PressableButton>
          <PressableButton>
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
