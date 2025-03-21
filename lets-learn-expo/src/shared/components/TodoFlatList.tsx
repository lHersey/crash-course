import { FlatList, StyleSheet, View } from "react-native";
import { TodoItem } from "../models/TodoType";
import { TodoListItem } from "./TodoListItem";
import { Divider } from "react-native-paper";
import { EmptyTodos } from "./EmptyTodos";

type Props = {
  todos: TodoItem[];
  isLoading: boolean;
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
}

const TodoFlatList = (props: Props) => {
  const {  todos, isLoading, onDeleteTodo, onToggleTodo } = props;

  return (
    <View style={styles.listContent}>
      <FlatList
        data={todos}
        contentContainerStyle={todos.length === 0 ? { flex: 1 } : {}}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => <EmptyTodos isLoading={isLoading} />}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={element => (
          <TodoListItem
            key={element.item.id}
            todoItem={element.item}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContent: {
    flex: 4,
  },
});

export { TodoFlatList };
