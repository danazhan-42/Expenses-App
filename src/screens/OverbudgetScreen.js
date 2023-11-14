import { View, StyleSheet } from "react-native";
import React from "react";
import EntriesList from "../components/EntriesList";
import { colors } from "../utility/colors";

export default function OverbudgetScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <EntriesList navigation={navigation} overLimit={true} />
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
