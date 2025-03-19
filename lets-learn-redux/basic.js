const { createStore } = require("redux");
//import { createStore } from "redux";

//Action types
const ADD_TODO_ITEM = "ADD_TODO_ITEM";
const REMOVE_TODO_ITEM = "REMOVE_TODO_ITEM";
const SET_DONE = "SET_DONE";

//Selectors 
function todoDescriptionSelector(state, id) {
  const item = state.listTodo.find(x => x.id === id);

  if(item) {
    return item.text;
  }

  return undefined;
}



//Action creators:
const addItem = text => {
  return { type: ADD_TODO_ITEM, payload: text };
}

const removeItem = id => {
  return { type: REMOVE_TODO_ITEM, payload: { id } };
}

const setDone = id => {
  return { type: SET_DONE, payload: { id } };
}


//Estado inicial
const initialState = {
  listTodo: [],
};

let id = 1;

// Reducer (Modifica el estado)
const reducer = (state = initialState, action) => {
  if (action.type === ADD_TODO_ITEM) {
    id++;
    const item = { id: id, text: action.payload, isDone: false };

    const listTodo = [item, ...state.listTodo];

    return { listTodo };
  }

  if (action.type === REMOVE_TODO_ITEM) {
    const filtered = state.listTodo.filter(x => x.id !== action.payload.id);

    return { listTodo: filtered };
  }

  if (action.type === SET_DONE) {
    const listTodo = state.listTodo.map(item => {
      if(item.id === action.payload.id) {
        return { ...item, isDone: true };
      }

      return item;
    });

    return { listTodo };
  }

  return state;
};

const store = createStore(reducer);


store.dispatch({ type: ADD_TODO_ITEM, payload: "Comprar arroz" });
store.dispatch(addItem("Comprar carne"));
store.dispatch(addItem("Comprar queso"));

store.dispatch(removeItem(3));

store.dispatch(setDone(2));

console.log(todoDescriptionSelector(store.getState(), 2));


