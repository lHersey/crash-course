import { increase } from "./store/counter/counter-actions";
import { selectCount } from "./store/counter/counter-selectors";
import { store } from "./store/setup-store";

export function setupCounter(element: HTMLButtonElement) {
  element.innerText = "Count is " + selectCount(store.getState());

  store.subscribe(() => {
    element.innerText = "Count is " + selectCount(store.getState());
  });

  element.addEventListener("click", () => store.dispatch(increase()));
}
