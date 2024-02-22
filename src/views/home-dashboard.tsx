import React from "react";
import { StyleSheet, View } from "react-native";
import { CtaButton } from "../components/buttons/cta-button";
import { colors } from "../theme/color-palette";

type Props = {};

export const HomeDashboard = (props: Props) => {
  return (
    <View style={styles.homescreenContainer}>
      <View style={styles.buttons}>
        <CtaButton
          text="Neue Bestellung"
          onPress={() => console.log("Pressed")}
        />
        <CtaButton text="Küche" onPress={() => console.log("Pressed")} />
        <CtaButton text="Kasse" onPress={() => console.log("Pressed")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homescreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.backgroundColor,
  },

  buttons: {
    height: 400,
    width: "100%",
    maxWidth: 600,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
});
