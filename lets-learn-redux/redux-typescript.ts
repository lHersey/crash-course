import { createStore, combineReducers } from "redux";

type Action<TipoDeAction extends string> = {
  type: TipoDeAction;
};

type ActionPayload<TipoDeAction extends string, TipoDelPayload> = {
  type: TipoDeAction;
  payload: TipoDelPayload;
};

type Vehicle = {
  name: string;
  model: string;
};

type AppError = {
  message: string;
  code: string;
};

enum VehicleActions {
  START_FETCH_VEHICLES_TYPE = "START_FETCH_VEHICLES_TYPE",
  SUCCESS_FETCH_VEHICLES_TYPE = "SUCCESS_FETCH_VEHICLES_TYPE",
  FAILURE_FETCH_VEHICLES_TYPE = "FAILURE_FETCH_VEHICLES_TYPE",
}

/********************* VEHICLE REDUCER ********************************* */
function startFetchVehicles(): Action<VehicleActions.START_FETCH_VEHICLES_TYPE> {
  return { type: VehicleActions.START_FETCH_VEHICLES_TYPE };
}

function successFetchVehicle(
  vehicleList: Vehicle[]
): ActionPayload<VehicleActions.SUCCESS_FETCH_VEHICLES_TYPE, { data: Vehicle[] }> {
  return { type: VehicleActions.SUCCESS_FETCH_VEHICLES_TYPE, payload: { data: vehicleList } };
}

function failedFetchVehicles(
  error: AppError
): ActionPayload<VehicleActions.FAILURE_FETCH_VEHICLES_TYPE, { error: AppError }> {
  return { type: VehicleActions.FAILURE_FETCH_VEHICLES_TYPE, payload: { error } };
}

interface VehicleInitialState {
  readonly data: Vehicle[];
  readonly error: AppError | null;
  readonly isLoading: boolean;
}

const vehicleInitialState: VehicleInitialState = {
  data: [],
  error: null,
  isLoading: false,
};

type VehicleActionsTypes =
  | Action<VehicleActions.START_FETCH_VEHICLES_TYPE>
  | ActionPayload<VehicleActions.SUCCESS_FETCH_VEHICLES_TYPE, { data: Vehicle[] }>
  | ActionPayload<VehicleActions.FAILURE_FETCH_VEHICLES_TYPE, { error: AppError }>;

const vehicleReducer = (initialState = vehicleInitialState, action: VehicleActionsTypes) => {
  if (action.type === VehicleActions.START_FETCH_VEHICLES_TYPE) {
    return {
      ...initialState,
      isLoading: true,
    };
  }

  if (action.type === VehicleActions.SUCCESS_FETCH_VEHICLES_TYPE) {
    return {
      ...initialState,
      isLoading: false,
      data: action.payload.data,
      error: null,
    };
  }

  if (action.type === VehicleActions.FAILURE_FETCH_VEHICLES_TYPE) {
    return {
      ...initialState,
      isLoading: false,
      error: action.payload.error,
    };
  }

  return initialState;
};

const store = createStore(vehicleReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: VehicleActions.START_FETCH_VEHICLES_TYPE });
store.dispatch({
  type: VehicleActions.FAILURE_FETCH_VEHICLES_TYPE,
  payload: { error: { code: "NOT_FOUND", message: "Vehicle type not found" } },
});

store.dispatch({
  type: VehicleActions.SUCCESS_FETCH_VEHICLES_TYPE,
  payload: { data: [{ model: "Nissan", name: "Mi carro" }] },
});
