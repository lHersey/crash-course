import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter/counter-reducer";

const rootReducer = combineReducers({
  counterState: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
