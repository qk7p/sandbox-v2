import * as React from "react";
import { useAppDispatch } from "../hooks/hooks";
import {
  changeMaterialWidth,
  changeMaterialHeight,
  changePaddingWidth,
  changePaddingHeight,
} from "../slices/materialSlice";
import { PanelHeader } from "./PanelHeader";

export function MaterialInput() {
  const dispatch = useAppDispatch();

  const materialWidthHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMaterialWidth(Number(event.target.value)));
  };
  const materialHeightHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(changeMaterialHeight(Number(event.target.value)));
  };
  const paddingWidthHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePaddingWidth(Number(event.target.value)));
  };
  const paddingHeightHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePaddingHeight(Number(event.target.value)));
  };
  return (
    <>
      <PanelHeader header="Параметры заготовки" />
      <div className="inputBlock">
        <div className="main">
          <input
            type="number"
            placeholder="Ширина заготовки:"
            onChange={materialWidthHandler}
          />
          <input
            type="number"
            placeholder="Высота заготовки:"
            onChange={materialHeightHandler}
          />
        </div>
        <div className="sub">
          <input
            type="number"
            placeholder="Вылеты:"
            onChange={paddingWidthHandler}
          />
          <input
            type="number"
            placeholder="Вылеты"
            onChange={paddingHeightHandler}
          />
        </div>
      </div>
    </>
  );
}
