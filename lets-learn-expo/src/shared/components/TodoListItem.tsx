import { List } from "react-native-paper";
import { TodoItem } from "../models/TodoType";
import { Animated, StyleSheet } from "react-native";
import { useRef } from "react";

type Props = {
  todoItem: TodoItem;
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
};

const TodoListItem = (props: Props) => {
  const { todoItem, onDeleteTodo, onToggleTodo } = props;
  const animation = useRef(new Animated.Value(1));

  const handleRemove = () => {
    Animated.timing(animation.current, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      onDeleteTodo(todoItem.id);
    });
  };

  return (
    <Animated.View style={{ transform: [{ scaleY: animation.current }] }}>
      <List.Item
        style={todoItem.isDone ? styles.done : {}}
        title={todoItem.text}
        description={todoItem.isDone ? "Hecho" : "Pendiente"}
        onPress={() => onToggleTodo(todoItem.id)}
        onLongPress={() => (todoItem.isDone ? handleRemove() : undefined)}
        right={props => <List.Icon {...props} icon={todoItem.isDone ? "check-bold" : "exclamation-thick"} />}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  done: {
    backgroundColor: "rgb(24, 99, 55)",
  },
});

export { TodoListItem };
