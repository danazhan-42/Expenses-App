import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../colors";

export default function PressableButton({
  children,
  pressedFunction,
  pressedStyle,
  defaultStyle,
}) {
  return (
    <Pressable
      onPress={pressedFunction}
      style={({ pressed }) => [
        styles.styleByDefault,
        defaultStyle,
        pressed && pressedStyle,
      ]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  styleByDefault: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 5,
    width: 120,
    alignItems: "center",
  },
});
