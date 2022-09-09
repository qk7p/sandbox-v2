import { DetailInput } from "./DetailInput";
import { MaterialInput } from "./MaterialInput";
import "../styles/components/InputPanel.css";

export function InputPanel() {
  return (
    <div className="inputPanel panel">
      <DetailInput />
      <MaterialInput />
      <div className="buttonsBlock">
        <div className="main">
          <button className="primaryButton">Разложить</button>
        </div>
        <div className="sub">
          <button className="secondaryButton">Сброс</button>
        </div>
      </div>
    </div>
  );
}
