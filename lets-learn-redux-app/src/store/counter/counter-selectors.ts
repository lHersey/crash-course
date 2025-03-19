import { RootState } from "../setup-store";

export const selectCount = (state: RootState) => {
  return state.counterState.count;
};
