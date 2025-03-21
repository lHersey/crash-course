import styles from "./App.module.css";

import { useState, useEffect, useCallback } from "react";
import { Button } from "./shared/components/button/Button";
import { TextField } from "./shared/components/text-field/TextField";
import { TodoItem } from "./shared/components/todo-item/TodoItem";
import { getAllTodos, getTodo, TodoItemType } from "./shared/services/todo-service";

export function FetchOneTodo() {
  const [todoInput, setTodoInput] = useState("");
  const [currentTodo, setCurrentTodo] = useState<TodoItemType | null>(null);

  /**
   * Sirve para memorizar funciones y evitar que se creen nuevas instancias en cada renderizado.
   * Se debe usar cuando una función se pasa como prop a un componente hijo.
   */
  const handleAddTodo = useCallback(async () => {
    setTodoInput("");

    const data = await getTodo(todoInput);
    setCurrentTodo(data);
  }, [todoInput]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>'To do' App</h1>
        <TextField
          label="ID de la tarea"
          value={todoInput}
          placeholder="Ingrese el ID tarea"
          onChange={text => setTodoInput(text)}
        />
        <div>
          <Button
            disabled={!todoInput}
            className={styles.submitButton}
            text="Buscar"
            onClick={handleAddTodo}
          />
        </div>
        <div>{currentTodo && <TodoItem item={currentTodo} />}</div>
      </div>
    </div>
  );
}

export function FetchAllTodos() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data: TodoItemType[] = await getAllTodos();

      setTodos(data);
    };

    fetchTodos();
  }, []);
  //1. Cuando no se pasa el array, el efecto se va a ejecutar en cada renderizado.
  //2. Cuando se pasa un array vacío, el efecto se va a ejecutar solo una vez, después del primer renderizado.
  //3. Cuando se pasa un array con elementos, el efecto se va a ejecutar solo cuando esos elementos cambien.

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>'To do' App</h1>
        <div className={styles.todoContainer}>
          {todos.map(todo => (
            <TodoItem key={todo.id} item={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function FetchWithCounter() {
  const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`);
      const data: TodoItemType = await response.json();

      setTodos([data]);
    };

    fetchTodos();
  }, [counter]);
  //1. Cuando no se pasa el array, el efecto se va a ejecutar en cada renderizado.
  //2. Cuando se pasa un array vacío, el efecto se va a ejecutar solo una vez, después del primer renderizado.
  //3. Cuando se pasa un array con elementos, el efecto se va a ejecutar solo cuando esos elementos cambien.

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>'To do' App</h1>
        <Button text={"Counter: " + counter} onClick={() => setCounter(counter + 1)} />
        <div className={styles.todoContainer}>
          {todos.map(todo => (
            <TodoItem key={todo.id} item={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FetchWithCounter;
