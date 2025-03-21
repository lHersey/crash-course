import { TodoItemType } from "../../services/todo-service";
import styles from "./TodoItem.module.css";

type Props = {
  item: TodoItemType;
};

const TodoItem = (props: Props) => {
  return (
    <div className={`${styles.todoItem} ${props.item.completed ? styles.completed : ""}`}>
      <p>{props.item.title}</p>
    </div>
  );
};

export { TodoItem };
