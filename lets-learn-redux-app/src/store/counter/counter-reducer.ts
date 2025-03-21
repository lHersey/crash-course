import { CounterActions, CounterActionsTypes } from "./counter-actions";

/**
 * Módulo del Reducer del Contador
 *
 * Este módulo maneja:
 * - La lógica de estado del contador
 * - Las transformaciones de estado basadas en las acciones
 * - La definición del estado inicial
 */

/**
 * Interface que define la estructura del estado del contador
 * Permite tener un tipado fuerte para el estado
 */
interface CounterInitialState {
  count: number;
}

/**
 * Estado inicial del contador
 * Establece los valores por defecto cuando la aplicación arranca
 */
const intialState: CounterInitialState = {
  count: 0,
};

/**
 * Función reductora del contador
 *
 * @param state - Estado actual, si no existe se usa el estado inicial
 * @param action - Acción despachada que indica cómo modificar el estado
 * @returns Nuevo estado después de procesar la acción
 */
const reducer = (
  state = intialState,
  action: CounterActions
): CounterInitialState => {
  if (action.type === CounterActionsTypes.INCREASE_COUNTER) {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === CounterActionsTypes.DECREASE_COUNTER) {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  return state;
};

export { reducer as counterReducer };
