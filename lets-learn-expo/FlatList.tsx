import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, View } from "react-native";
import { List } from "react-native-paper";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

//ScrollView (Renderiza todos los elementos de una sola vez, es más directo, no tiene optimizaciones)
//FlatList (Lazy Loading, más personalizable, soporte para header y footer, mejor rendimiento)

const data = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

function App() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: "#fff",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar style="light" />
      <FlatList
        onEndReached={() => console.log("End reached")}
        onEndReachedThreshold={0.5}
        data={data}
        keyExtractor={text => text}
        renderItem={item => <List.Item title={item.item} description={"soy descripción"} />}
      />
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
