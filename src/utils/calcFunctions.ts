import { store } from "../store/store";

export function calcDetailArea() {
  const detailState = store.getState().detail;
  return (
    ((detailState.width + detailState.marginWidth * 2) *
      (detailState.height + detailState.marginHeight * 2)) /
    1000000
  );
}
