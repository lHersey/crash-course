/**
 * Módulo de Acciones del Contador
 *
 * Este módulo contiene:
 * - Tipos de acciones disponibles para el contador
 * - Creadores de acciones para modificar el estado
 * - Definiciones de tipos TypeScript para type-safety
 */

import { Action } from "../types";

/**
 * Enum que define los tipos de acciones disponibles
 * Estos tipos son utilizados tanto por las acciones como por el reducer
 */
export enum CounterActionsTypes {
  INCREASE_COUNTER = "INCREASE_COUNTER",
  DECREASE_COUNTER = "DECREASE_COUNTER",
}

/**
 * Action Creator para incrementar
 * @returns Objeto de acción para aumentar el contador en 1
 */
export const increase = () => {
  return { type: CounterActionsTypes.INCREASE_COUNTER };
};

/**
 * Action Creator para decrementar
 * @returns Objeto de acción para disminuir el contador en 1
 */
export const decrease = () => {
  return { type: CounterActionsTypes.DECREASE_COUNTER };
};

/**
 * Tipo unión que representa todas las posibles acciones del contador
 * Utilizado para type-safety en el reducer
 */
export type CounterActions =
  | Action<CounterActionsTypes.INCREASE_COUNTER>
  | Action<CounterActionsTypes.DECREASE_COUNTER>;
