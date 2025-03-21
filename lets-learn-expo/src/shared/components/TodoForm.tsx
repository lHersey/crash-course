import { useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { TodoItem } from "../models/TodoType";

type Props = {
  disabled: boolean;
  onSubmit: (todo: TodoItem) => void;
}

const TodoForm = (props: Props) => {
  const [text, setText] = useState("");

  const handleCreateTodo = () => {
    const newTodo: TodoItem = {
      id: Date.now().toString(),
      text: text.trim(),
      isDone: false,
    };

    Keyboard.dismiss();
    setText("");
    props.onSubmit(newTodo);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>Mi ToDo Checklist :D</Text>
      <TextInput
        value={text}
        onChangeText={newText => setText(newText)}
        style={styles.textInput}
        mode="outlined"
        label="Info del todo"
        returnKeyType="done"
        disabled={props.disabled}
      />
      <Button
        disabled={props.disabled || !text.trim()}
        mode="contained"
        onPress={handleCreateTodo}
        style={styles.submitButton}
      >
        AGREGAR
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    padding: 10,
    justifyContent: "space-evenly",
    borderTopColor: "#fff",
    borderTopWidth: 0.3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  submitButton: {
    marginTop: 0,
  },
  textInput: {
    marginTop: 0,
  },
});

export { TodoForm };
