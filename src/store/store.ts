import { configureStore } from "@reduxjs/toolkit";
import { detailSlice } from "../slices/detailSlice";
import { materialSlice } from "../slices/materialSlice";
import { nestingSlice } from "../slices/nestingSlice";
import { toastListSlice } from "../slices/toastListSlice";

export const store = configureStore({
  reducer: {
    detail: detailSlice.reducer,
    material: materialSlice.reducer,
    toastList: toastListSlice.reducer,
    nesting: nestingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
