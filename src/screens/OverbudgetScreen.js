import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function OverbudgetScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>OverbudgetScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
