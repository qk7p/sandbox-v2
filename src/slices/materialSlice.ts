import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface materialState {
  width: number;
  height: number;
  paddingWidth: number;
  paddingHeight: number;
}

const initialState: materialState = {
  width: 0,
  height: 0,
  paddingWidth: 0,
  paddingHeight: 0,
};

export const materialSlice = createSlice({
  name: "material",
  initialState,
  reducers: {
    changeMaterialWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    changeMaterialHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    changePaddingWidth: (state, action: PayloadAction<number>) => {
      state.paddingWidth = action.payload;
    },
    changePaddingHeight: (state, action: PayloadAction<number>) => {
      state.paddingHeight = action.payload;
    },
  },
});

export const {
  changeMaterialWidth,
  changeMaterialHeight,
  changePaddingWidth,
  changePaddingHeight,
} = materialSlice.actions;

export const selectMaterialWidth = (state: RootState) => state.material.width;
export const selectMaterialHeight = (state: RootState) => state.material.height;
export const selectPaddingWidth = (state: RootState) =>
  state.material.paddingWidth;
export const selectPaddingHeight = (state: RootState) =>
  state.material.paddingHeight;

export default materialSlice.reducer;
