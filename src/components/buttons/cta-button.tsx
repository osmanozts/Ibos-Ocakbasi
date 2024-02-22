import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type CtaButtonProps = {
  text: string;
  onPress: () => void;
};

export const CtaButton = (props: CtaButtonProps) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={props.onPress}>
      <Text>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {},
});
