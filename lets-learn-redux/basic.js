/*
 * REDUX: GESTIÓN DE ESTADO GLOBAL
 * -----------------------------
 * Redux es una biblioteca para manejar el estado global de aplicaciones JavaScript.
 * Implementa un patrón de diseño unidireccional donde:
 * 1. El estado es inmutable y solo puede modificarse mediante acciones
 * 2. Los cambios se procesan de forma predecible mediante reducers puros
 * 3. Existe un único store que contiene todo el árbol de estado
 */

const { createStore } = require("redux");

/*
 * ACTION TYPES
 * -----------
 * Los Action Types son constantes que identifican las operaciones posibles.
 * Beneficios de usar constantes:
 * 1. Previene errores de tipeo
 * 2. Facilita el mantenimiento
 * 3. Permite autocompletado en IDEs
 */
const ADD_TODO_ITEM = "ADD_TODO_ITEM";
const REMOVE_TODO_ITEM = "REMOVE_TODO_ITEM";
const SET_DONE = "SET_DONE";

/*
 * SELECTORS
 * --------
 * Los Selectors son funciones puras que:
 * 1. Extraen y computan datos derivados del estado
 * 2. Permiten reutilizar lógica de acceso a datos
 * 3. Pueden memoizarse para optimizar rendimiento
 */
function todoDescriptionSelector(state, id) {
  const item = state.listTodo.find((x) => x.id === id);

  if (item) {
    return item.text;
  }

  return undefined;
}

/*
 * ACTION CREATORS
 * -------------
 * Los Action Creators son funciones que crean acciones.
 * Ventajas:
 * 1. Encapsulan la estructura de las acciones
 * 2. Pueden ser reutilizados
 * 3. Pueden contener lógica adicional
 */
const addItem = (text) => {
  return { type: ADD_TODO_ITEM, payload: text };
};

const removeItem = (id) => {
  return { type: REMOVE_TODO_ITEM, payload: { id } };
};

const setDone = (id) => {
  return { type: SET_DONE, payload: { id } };
};

/*
 * ESTADO INICIAL
 * ------------
 * El estado inicial define la estructura base de la aplicación.
 * Consideraciones:
 * 1. Debe reflejar todos los datos necesarios
 * 2. La estructura debe ser plana y normalizada
 * 3. Evitar redundancia de datos
 */
const initialState = {
  listTodo: [],
};

let id = 1;

/*
 * REDUCER
 * ------
 * El Reducer es el corazón de Redux. Es una función pura que:
 * 1. Recibe el estado actual y una acción
 * 2. Retorna el nuevo estado sin mutar el anterior
 * 3. Debe ser predecible y sin efectos secundarios
 *
 * IMPORTANTE:
 * - Nunca mutar el estado directamente
 * - Siempre retornar un nuevo objeto
 * - No realizar operaciones asíncronas
 */
const reducer = (state = initialState, action) => {
  // Cada if evalúa un tipo de acción diferente y realiza las transformaciones necesarias
  if (action.type === ADD_TODO_ITEM) {
    id++;
    const item = { id: id, text: action.payload, isDone: false };

    const listTodo = [item, ...state.listTodo];

    return { listTodo };
  }

  if (action.type === REMOVE_TODO_ITEM) {
    const filtered = state.listTodo.filter((x) => x.id !== action.payload.id);

    return { listTodo: filtered };
  }

  if (action.type === SET_DONE) {
    const listTodo = state.listTodo.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, isDone: true };
      }

      return item;
    });

    return { listTodo };
  }

  // Si no hay acciones que manejar, retornamos el estado sin cambios
  return state;
};

/*
 * STORE
 * ----
 * El Store es el objeto que conecta todos los conceptos de Redux:
 * 1. Mantiene el estado de la aplicación
 * 2. Permite acceder al estado via getState()
 * 3. Permite actualizar el estado via dispatch(action)
 * 4. Registra listeners via subscribe(listener)
 */
const store = createStore(reducer);

/*
 * USO PRÁCTICO
 * ----------
 * Dispatch es el método para enviar acciones al store.
 * Dos formas comunes de dispatchar:
 * 1. Directamente con un objeto de acción
 * 2. Usando action creators (recomendado)
 */
// Ejemplos de uso:
// Dispatch es el método que usamos para enviar acciones al store
// Podemos dispatchar directamente un objeto de acción
store.dispatch({ type: ADD_TODO_ITEM, payload: "Comprar arroz" });

// O usar action creators para mayor claridad y mantenibilidad
store.dispatch(addItem("Comprar carne"));
store.dispatch(addItem("Comprar queso"));

store.dispatch(removeItem(3));

store.dispatch(setDone(2));

console.log(todoDescriptionSelector(store.getState(), 2));
