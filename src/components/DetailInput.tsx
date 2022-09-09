import { useAppDispatch } from "../hooks/hooks";
import {
  changeDetailWidth,
  changeDetailHeight,
  changeMarginWidth,
  changeMarginHeight,
} from "../slices/detailSlice";
import { PanelHeader } from "./PanelHeader";

export interface IDetailInputProps {}

export function DetailInput(props: IDetailInputProps) {
  const dispatch = useAppDispatch();

  const detailWidthHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeDetailWidth(Number(event.target.value)));
  };
  const detailHeightHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeDetailHeight(Number(event.target.value)));
  };
  const marginWidthHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMarginWidth(Number(event.target.value)));
  };
  const mrginHeightHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMarginHeight(Number(event.target.value)));
  };

  return (
    <>
      <PanelHeader header={"Параметры детали:"} />
      <div className="inputBlock">
        <div className="main">
          <input
            type="number"
            placeholder="Ширина детали:"
            onChange={detailWidthHandler}
          />
          <input
            type="number"
            placeholder="Высота детали:"
            onChange={detailHeightHandler}
          />
        </div>
        <div className="sub">
          <input
            type="number"
            placeholder="Вылеты:"
            onChange={marginWidthHandler}
          />
          <input
            type="number"
            placeholder="Вылеты:"
            onChange={mrginHeightHandler}
          />
        </div>
      </div>
    </>
  );
}
