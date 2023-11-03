import Login from "./page/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Cadastro from "./page/cadastro";

import { Route, Routes } from "react-router-dom";
import Home from "./page/home";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
