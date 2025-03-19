import { CounterActions, CounterActionsTypes } from "./counter-actions";

interface CounterInitialState {
  count: number;
}

const intialState: CounterInitialState = {
  count: 0,
};

const reducer = (state = intialState, action: CounterActions): CounterInitialState => {
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
