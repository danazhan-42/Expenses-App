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
      style={({ pressed }) => [defaultStyle, pressed && pressedStyle]}
    >
      {children}
    </Pressable>
  );
}
