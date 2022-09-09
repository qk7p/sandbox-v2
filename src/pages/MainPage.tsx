import { InputPanel } from "../components/InputPanel";
import { LegendPanel } from "../components/LegendPanel";
import { NestingPanel } from "../components/NestingPanel";
import { PageHeader } from "../components/PageHeader";
import { ResultPanel } from "../components/ResultPanel";
import { Toast } from "../components/Toast";
import "../styles/pages/MainPage.css";

export function MainPage() {
  console.log("main")
  return (
    <div className="mainPage">
      <PageHeader
        pageTitle="Нестер 2D"
        pageDescription="Нестер - средство для раскладки деталей на заготовку."
      />

      <div className="body">
        <div className="leftblock">
          <InputPanel />
          <ResultPanel />
        </div>

        <div className="rightblock">
          <LegendPanel />
          <NestingPanel />
        </div>
      </div>
      <Toast />
    </div>
  );
}
