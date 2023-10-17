import { View, Text, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function EntryItem({ item }) {
  return (
    <Pressable>
      <View>
        <Text>{item.description}</Text>
      </View>
      <View>
        <View>
          {item.quantity * item.price > 500 && (
            <Ionicons name="warning" size={32} color="gold" />
          )}
          <Text>
            {item.quantity} * {item.price}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
