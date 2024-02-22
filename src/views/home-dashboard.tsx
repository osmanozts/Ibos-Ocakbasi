import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { CtaButton } from "../components/buttons/cta-button";

type Props = {};

export const HomeDashboard = (props: Props) => {
  return (
    <View style={styles.container}>
      <CtaButton
        text="Neue Bestellung"
        onPress={() => console.log("Pressed")}
      />
      <CtaButton text="Küche" onPress={() => console.log("Pressed")} />
      <CtaButton text="Kasse" onPress={() => console.log("Pressed")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
