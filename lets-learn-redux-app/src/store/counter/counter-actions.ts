import { Action } from "../types";

export enum CounterActionsTypes {
  INCREASE_COUNTER = "INCREASE_COUNTER",
  DECREASE_COUNTER = "DECREASE_COUNTER",
}

export const increase = () => {
  return { type: CounterActionsTypes.INCREASE_COUNTER };
};

export const decrease = () => {
  return { type: CounterActionsTypes.DECREASE_COUNTER };
};

export type CounterActions =
  | Action<CounterActionsTypes.INCREASE_COUNTER>
  | Action<CounterActionsTypes.DECREASE_COUNTER>;
