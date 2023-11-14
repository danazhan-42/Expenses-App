import { View, FlatList, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { database } from "../firebase/firebaseSetup";
import { collection, onSnapshot } from "firebase/firestore";

import EntryItem from "./EntryItem";

export default function EntriesList({ navigation, overLimit }) {
  const [expenses, setExpenses] = useState([]);

  // Use onSnapshot to listen to realtime updates in Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "entries"),
      (querySnapshot) => {
        let newArray = [];
        querySnapshot.docs.forEach((docSnap) => {
          newArray.push({ ...docSnap.data(), id: docSnap.id });
        });
        setExpenses(newArray);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        // Use the overLimit prop to filter entries
        data={
          overLimit
            ? expenses.filter((entry) => entry.isOverbudget === true)
            : expenses
        }
        renderItem={({ item }) => {
          return <EntryItem entry={item} navigation={navigation} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    margin: 10,
  },
});
