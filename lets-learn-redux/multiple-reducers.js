const { createStore, combineReducers } = require("redux");

// Action types
const START_FETCH_VEHICLES_TYPE = "START_FETCH_VEHICLES_TYPE";
const SUCCESS_FETCH_VEHICLES_TYPE = "SUCCESS_FETCH_VEHICLES_TYPE";
const FAILURE_FETCH_VEHICLES_TYPE = "FAILURE_FETCH_VEHICLES_TYPE";

const START_FETCH_VEHICLES_TYPES_TYPE = "START_FETCH_VEHICLES_TYPES_TYPE";
const SUCCESS_FETCH_VEHICLES_TYPES_TYPE = "SUCCESS_FETCH_VEHICLES_TYPES_TYPE";
const FAILURE_FETCH_VEHICLES_TYPES_TYPE = "FAILURE_FETCH_VEHICLES_TYPES_TYPE";

const SET_CURRENT_USER = "SET_CURRENT_USER";
const LOGOUT = "LOGOUT";

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

/********************* VEHICLE TYPE REDUCER ********************************* */
//Action creators
function startFetchVehicleTypes() {
  return { type: START_FETCH_VEHICLES_TYPES_TYPE };
}

function successFetchVehicleTypes(vehicleList) {
  return { type: SUCCESS_FETCH_VEHICLES_TYPES_TYPE, payload: { data: vehicleList } };
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

/************************ SETUP STORE ********************************/

const reducer = combineReducers({
  vehicleState: vehicleReducer,
  vehicleTypeState: vehicleTypeReducer,
  authState: authReducer,
});

const store = createStore(reducer);

store.subscribe(() => {});

store.dispatch({ type: SET_CURRENT_USER, payload: { estoEstaMal: "error" } });
store.dispatch({ type: SUCCESS_FETCH_VEHICLES_TYPE, payload: { data: ["Nissan", "Toyota"] } });
store.dispatch({ type: SUCCESS_FETCH_VEHICLES_TYPES_TYPE, payload: { data: ["Carro", "Moto "] } });

console.log(store.getState());


store.dispatch({ type: LOGOUT });



console.log(store.getState());
