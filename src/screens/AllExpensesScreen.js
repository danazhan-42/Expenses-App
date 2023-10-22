import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import EntriesList from "../components/EntriesList";
import { colors } from "../../colors";
import { database } from "../firebase/firebaseSetup";
import { QuerySnapshot, collection, onSnapshot } from "firebase/firestore";

export default function AllExpensesScreen({ navigation }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    onSnapshot(collection(database, "entries"), (querySnapshot) => {
      if (!querySnapshot.empty) {
        let newArray = [];
        // use a for loop to call .data() on each item of querySnapshot.docs
        querySnapshot.docs.forEach((docSnap) => {
          newArray.push({ ...docSnap.data(), id: docSnap.id });
        });

        setExpenses(newArray);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <EntriesList
        entries={expenses}
        navigation={navigation}
        overLimit={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    flexGrow: 1,
  },
});
