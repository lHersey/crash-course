import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

//ScrollView (Renderiza todos los elementos de una sola vez, es más directo, no tiene optimizaciones)
//FlatList (Lazy Loading, más personalizable,  soporte para header y footer, mejor rendimiento)

function App() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: "#1f2430",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar style="light" />
      <ScrollView
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.container]}
      >
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    height: 100,
    minWidth: 100,
    backgroundColor: "white",
    borderRadius: 20,
  },
});

export default () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
);
