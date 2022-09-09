import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface nestingState {
  quantity: number;
}

const initialState: nestingState = {
  quantity: 0,
};

export const nestingSlice = createSlice({
  name: "nesting",
  initialState,
  reducers: {
    changeQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
  },
});

export const { changeQuantity } = nestingSlice.actions;

export const selectQuantity = (state: RootState) => state.nesting.quantity;

export default nestingSlice.reducer;
