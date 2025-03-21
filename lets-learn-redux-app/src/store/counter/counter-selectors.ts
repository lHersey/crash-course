import { RootState } from "../setup-store";

/**
 * Módulo de Selectores del Contador
 *
 * Este módulo contiene:
 * - Funciones selectoras para acceder al estado del contador
 * - Memoización y optimización de lectura de estado
 */

/**
 * Selector para el valor del contador
 *
 * @param state - Estado global de la aplicación
 * @returns El valor actual del contador desde el estado
 */
export const selectCount = (state: RootState) => {
  return state.counterState.count;
};
