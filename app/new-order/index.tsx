import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/color-palette";

type Props = {};

const NewOrder = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>NewOrder</Text>
    </View>
  );
};

export default NewOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
});
