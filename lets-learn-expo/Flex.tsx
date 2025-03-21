import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

/*
 * FLEXBOX EN REACT NATIVE
 * ---------------------
 * React Native usa Flexbox para layouts pero con diferencias:
 * 1. flexDirection: 'column' por defecto (no 'row')
 * 2. alignItems: 'stretch' por defecto
 * 3. Dimensiones absolutas en unidades de densidad independiente
 */

function App() {
  const insets = useSafeAreaInsets();

  /*
   * ESTILOS Y LAYOUTS
   * ---------------
   * Los estilos en RN:
   * 1. Son objetos JavaScript
   * 2. Usan camelCase (no kebab-case)
   * 3. Son más limitados que CSS
   */

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
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
      <View style={[styles.card, { flexWrap: "wrap" }]}>
        <View style={styles.red} />
        <View style={styles.blue} />
        <View style={styles.green} />
      </View>
    </View>
  );
}

/*
 * STYLESHEET API
 * ------------
 * Ventajas de StyleSheet.create:
 * 1. Validación de propiedades
 * 2. Optimización de rendimiento
 * 3. Autocompletado en IDEs
 */
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
