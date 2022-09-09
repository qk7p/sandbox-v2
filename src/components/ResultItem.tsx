import { makeToast } from "../utils/makeToast";
import "../styles/components/ResultItem.css";
import { ToastType } from "../data/ToastItem";

export interface IResultIteProps {
  name: string;
  value: number | string;
  valueType: string;
}

export function ResultItem(props: IResultIteProps) {
  const { name, value, valueType } = props;

  async function clickToClipboard() {
    await navigator.clipboard.writeText(value.toString());
    makeToast("Скопировано в буфер обмена", ToastType.Info);
  }

  return (
    <div className="ResultItem">
      <p>
        {name}:{" "}
        <span className="quantity" onClick={clickToClipboard}>
          {value}
        </span>{" "}
        {valueType}
      </p>
    </div>
  );
}
