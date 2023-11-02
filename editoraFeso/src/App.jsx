import "./App.css";
import Login from "./page/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Cadastro from "./page/cadastro";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-light bg-dark rounded-4 fs-2 p-3">Editora Unifeso</h1>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </>
  );
}

export default App;
