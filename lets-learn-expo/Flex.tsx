import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

function App() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right }]}>
      <StatusBar style="light" />
      <View style={styles.card}>
        <View style={styles.red} />
        <View style={styles.blue} />
      </View>
      <View style={styles.card}>
        <View style={styles.red} />
        <View style={styles.blue} />
      </View>
      <View style={styles.card}>
        <View style={styles.red} />
        <View style={styles.blue} />
      </View>
      <View style={[styles.card, { flexWrap: "wrap"}]}>
        <View style={styles.red} />
        <View style={styles.blue} />
        <View style={styles.green} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f2430",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  card: {
    height: 150,
    width: 150,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    gap: 10,
    overflow: "hidden",
  },
  red: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  blue: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
  },
  green: {
    width: 50,
    height: 50,
    backgroundColor: "green",
  },
});

export default () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
);
