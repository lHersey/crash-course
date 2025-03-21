export type TodoItemType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const BASE_TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

export async function getAllTodos(): Promise<TodoItemType[]> {
  try {
    const response = await fetch(BASE_TODOS_URL);

    if(!response.ok) {
      return [];
    }

    const data: TodoItemType[] = await response.json();

    return data;
  } catch (error) {
    console.error(error);

    throw error;
  }
}


export async function getTodo(id: string | number): Promise<TodoItemType | null> {
  try {
    const response = await fetch(`${BASE_TODOS_URL}/${id}`);

    if(!response.ok) {
      return null;
    }

    const data: TodoItemType = await response.json();

    return data;
  } catch (error) {
    console.error(error);

    throw error;
  }
}
