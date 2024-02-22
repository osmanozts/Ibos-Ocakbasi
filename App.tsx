import { StyleSheet, View } from "react-native";
import { HomeDashboard } from "./src/views/home-dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeDashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
