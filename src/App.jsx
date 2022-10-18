import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";

function App() {
  return (
    <>
      <h1>Laboratório de Desenvolvimento WEB</h1>
      <BrowserRouter>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
