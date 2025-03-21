/**
 * Archivo de configuración principal de la store de Redux
 *
 * Este archivo se encarga de:
 * - Combinar todos los reducers de la aplicación
 * - Crear la store principal de Redux
 * - Exportar el tipo RootState para tipado global
 */
import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter/counter-reducer";

const rootReducer = combineReducers({
  counterState: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
