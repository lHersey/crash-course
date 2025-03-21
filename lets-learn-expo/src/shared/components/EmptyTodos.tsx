import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, Icon } from "react-native-paper";

type Props = { isLoading: boolean };

function EmptyTodos(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {!props.isLoading ? (
          <>
            <Icon source={"check-bold"} size={30} color="#fff" />
            <Text style={styles.title}>No hay elementos</Text>
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  }
});

export { EmptyTodos };
