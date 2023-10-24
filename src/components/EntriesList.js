import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import EntryItem from "./EntryItem";

export default function EntriesList({ entries, navigation, overLimit }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={
          overLimit
            ? entries.filter((entry) => entry.isOverbudget === true)
            : entries
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
