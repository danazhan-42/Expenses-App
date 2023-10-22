import { View, Text, FlatList } from "react-native";
import React from "react";

import EntryItem from "./EntryItem";

export default function EntriesList({ entries, navigation, overLimit }) {
  return (
    <View>
      <FlatList
        data={
          overLimit
            ? entries.filter((entry) => entry.quantity * entry.price > 500)
            : entries
        }
        renderItem={({ item }) => {
          return <EntryItem entry={item} navigation={navigation} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
