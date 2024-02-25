import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { CtaButton } from "../../components/buttons/cta-button";
import { supabase } from "../../lib/supabase";
import { colors } from "../../theme/color-palette";

type Props = {};

export default function HomeDashboard(props: Props) {
  return (
    <View style={styles.homescreenContainer}>
      <View style={styles.buttons}>
        <CtaButton
          text="Neue Bestellung"
          onPress={() => router.navigate({ pathname: "new-order" })}
        />
        <CtaButton
          text="Küche"
          onPress={() => router.navigate({ pathname: "kitchen" })}
        />
        <CtaButton
          text="Kasse"
          onPress={() => router.navigate({ pathname: "checkout" })}
        />
        <CtaButton text="Ausloggen" onPress={() => supabase.auth.signOut()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homescreenContainer: {
    backgroundColor: colors.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  buttons: {
    height: 400,
    width: "100%",
    maxWidth: 600,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
});
