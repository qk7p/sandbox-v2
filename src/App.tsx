import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainPage />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
