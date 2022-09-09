import { stat } from "fs";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/hooks";
import "../styles/components/ResultPanel.css";
import { PanelHeader } from "./PanelHeader";
import { ResultItem } from "./ResultItem";

export function ResultPanel() {
  console.log("render");


  const [detailArea, setDetailArea] = useState(0);
  const [detailPerimeter, setDetailPerimeter] = useState(0);
  const [materialArea, setMaterialArea] = useState(0);

  const nestingResult = useAppSelector((state) => state.nesting.quantity);

  return (
    <div className="resultPanel panel">
      <PanelHeader header="Результаты раскладки:" />
      <ResultItem
        name={"Площадь детали:"}
        value={detailArea.toFixed(2)}
        valueType={" кв.м"}
      />
      <ResultItem name={""} value={0} valueType={""} />
      <ResultItem name={""} value={0} valueType={""} />
      <ResultItem name={""} value={0} valueType={""} />
      <ResultItem name={""} value={0} valueType={""} />
    </div>
  );
}
