import { Pressable, StyleSheet } from "react-native";
import React from "react";

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
  styleByDefault: {},
});
