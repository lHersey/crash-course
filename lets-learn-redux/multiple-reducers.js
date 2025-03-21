/*
 * REDUX CON MÚLTIPLES REDUCERS
 * --------------------------
 * En aplicaciones reales, dividimos la lógica en múltiples reducers para:
 * 1. Mejorar la mantenibilidad del código
 * 2. Separar responsabilidades
 * 3. Manejar diferentes dominios de datos independientemente
 */

const { createStore, combineReducers } = require("redux");

/*
 * ACTION TYPES
 * -----------
 * Organizados por dominio:
 * 1. Vehículos: Gestión de lista de vehículos
 * 2. Tipos de Vehículos: Categorización
 * 3. Autenticación: Estado del usuario
 */

// Action types
const START_FETCH_VEHICLES_TYPE = "START_FETCH_VEHICLES_TYPE";
const SUCCESS_FETCH_VEHICLES_TYPE = "SUCCESS_FETCH_VEHICLES_TYPE";
const FAILURE_FETCH_VEHICLES_TYPE = "FAILURE_FETCH_VEHICLES_TYPE";

const START_FETCH_VEHICLES_TYPES_TYPE = "START_FETCH_VEHICLES_TYPES_TYPE";
const SUCCESS_FETCH_VEHICLES_TYPES_TYPE = "SUCCESS_FETCH_VEHICLES_TYPES_TYPE";
const FAILURE_FETCH_VEHICLES_TYPES_TYPE = "FAILURE_FETCH_VEHICLES_TYPES_TYPE";

const SET_CURRENT_USER = "SET_CURRENT_USER";
const LOGOUT = "LOGOUT";

/*
 * REDUCER DE VEHÍCULOS
 * ------------------
 * Patrón común para operaciones asíncronas:
 * 1. START: Indica inicio de la operación
 * 2. SUCCESS: Actualiza datos al completar
 * 3. FAILURE: Maneja errores
 */

/********************* VEHICLE REDUCER ********************************* */
//Action creators
function startFetchVehicles() {
  return { type: START_FETCH_VEHICLES_TYPE };
}

function successFetchVehicle(vehicleList) {
  return { type: SUCCESS_FETCH_VEHICLES_TYPE, payload: { data: vehicleList } };
}

function failedFetchVehicles(error) {
  return { type: FAILURE_FETCH_VEHICLES_TYPE, payload: { error } };
}

//Selectors
function selectIsLoadingVehicles(state) {
  return state.vehicleState.isLoading;
}

const vehicleInitialState = {
  data: [],
  error: null,
  isLoading: false,
};

const vehicleReducer = (initialState = vehicleInitialState, action) => {
  if (action.type === LOGOUT) {
    return vehicleInitialState;
  }

  if (action.type === START_FETCH_VEHICLES_TYPE) {
    return {
      ...initialState,
      isLoading: true,
    };
  }

  if (action.type === SUCCESS_FETCH_VEHICLES_TYPE) {
    return {
      ...initialState,
      isLoading: false,
      data: action.payload.data,
      error: null,
    };
  }

  if (action.type === FAILURE_FETCH_VEHICLES_TYPE) {
    return {
      ...initialState,
      isLoading: false,
      error: action.payload.error,
    };
  }

  return initialState;
};

/*
 * REDUCER DE TIPOS DE VEHÍCULOS
 * --------------------------
 * Similar al reducer de vehículos pero maneja
 * la categorización y tipos de vehículos disponibles.
 * Demuestra la reutilización de patrones en Redux.
 */

/********************* VEHICLE TYPE REDUCER ********************************* */
//Action creators
function startFetchVehicleTypes() {
  return { type: START_FETCH_VEHICLES_TYPES_TYPE };
}

function successFetchVehicleTypes(vehicleList) {
  return {
    type: SUCCESS_FETCH_VEHICLES_TYPES_TYPE,
    payload: { data: vehicleList },
  };
}

function failedFetchVehicleTypes(error) {
  return { type: FAILURE_FETCH_VEHICLES_TYPES_TYPE, payload: { error } };
}

//Selectors
function selectIsLoadingVehicleTypes(state) {
  return state.vehicleTypeState.isLoading;
}

// Initial state
const vehicleTypeInitialState = {
  data: [],
  error: null,
  isLoading: false,
};

const vehicleTypeReducer = (initialState = vehicleTypeInitialState, action) => {
  if (action.type === LOGOUT) {
    return vehicleTypeInitialState;
  }

  if (action.type === START_FETCH_VEHICLES_TYPES_TYPE) {
    return {
      ...initialState,
      isLoading: true,
    };
  }

  if (action.type === SUCCESS_FETCH_VEHICLES_TYPES_TYPE) {
    return {
      ...initialState,
      isLoading: false,
      data: action.payload.data,
      error: null,
    };
  }

  if (action.type === FAILURE_FETCH_VEHICLES_TYPES_TYPE) {
    return {
      ...initialState,
      isLoading: false,
      error: action.payload.error,
    };
  }

  return initialState;
};

/*
 * REDUCER DE AUTENTICACIÓN
 * ---------------------
 * Maneja el estado de autenticación del usuario.
 * Características:
 * 1. Estado más simple (solo usuario actual)
 * 2. Reseteo completo al cerrar sesión
 * 3. Afecta a otros reducers (limpieza de datos)
 */

/********************* AUTH REDUCER ********************************* */
const authInitialState = {
  currentUser: null,
};

const authReducer = (initialState = authInitialState, action) => {
  if (action.type === LOGOUT) {
    return authInitialState;
  }

  if (action.type === SET_CURRENT_USER) {
    return {
      ...initialState,
      currentUser: action.payload,
    };
  }

  return initialState;
};

/*
 * COMBINACIÓN DE REDUCERS
 * ---------------------
 * combineReducers es una utilidad de Redux que:
 * 1. Une múltiples reducers en uno solo
 * 2. Cada reducer maneja su propia porción del estado
 * 3. Crea un estado estructurado por dominio
 *
 * Estructura resultante:
 * {
 *   vehicleState: { data, error, isLoading },
 *   vehicleTypeState: { data, error, isLoading },
 *   authState: { currentUser }
 * }
 */

const reducer = combineReducers({
  vehicleState: vehicleReducer,
  vehicleTypeState: vehicleTypeReducer,
  authState: authReducer,
});

/*
 * STORE Y EJEMPLOS DE USO
 * ---------------------
 * El store maneja múltiples slices de estado.
 * Cada dispatch afecta solo a los reducers relevantes.
 * El logout es un ejemplo de acción que afecta a múltiples reducers.
 */

/************************ SETUP STORE ********************************/

const store = createStore(reducer);

store.subscribe(() => {});

store.dispatch({ type: SET_CURRENT_USER, payload: { estoEstaMal: "error" } });
store.dispatch({
  type: SUCCESS_FETCH_VEHICLES_TYPE,
  payload: { data: ["Nissan", "Toyota"] },
});
store.dispatch({
  type: SUCCESS_FETCH_VEHICLES_TYPES_TYPE,
  payload: { data: ["Carro", "Moto "] },
});

console.log(store.getState());

store.dispatch({ type: LOGOUT });

console.log(store.getState());
