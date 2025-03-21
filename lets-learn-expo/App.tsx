import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { PaperProvider, MD3DarkTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { TodoItem } from "./src/shared/models/TodoType";
import { TodoForm } from "./src/shared/components/TodoForm";
import { TodoFlatList } from "./src/shared/components/TodoFlatList";

function App() {
  const insets = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleFormSubmit = (todo: TodoItem) => {
    setTodos([todo, ...todos]);
  };

  const handleToggleTodo = (id: string) => {
    const newTodos = todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  useEffect(() => {
    async function readTodos() {
      const todos = await AsyncStorage.getItem("todos");
      await new Promise(resolve => setTimeout(resolve, 5000));
      if (todos) {
        setTodos(JSON.parse(todos));
      }

      setIsLoading(false);
    }

    readTodos();
  }, []);

  useEffect(() => {
    async function persistTodos() {
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    }
    persistTodos();
  }, [todos]);

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: "#1f2430",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar style="light" />
      <View style={styles.content}>
        <TodoFlatList todos={todos} isLoading={isLoading} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
        <TodoForm disabled={isLoading} onSubmit={handleFormSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default () => (
  <SafeAreaProvider>
    <PaperProvider theme={MD3DarkTheme}>
      <App />
    </PaperProvider>
  </SafeAreaProvider>
);
