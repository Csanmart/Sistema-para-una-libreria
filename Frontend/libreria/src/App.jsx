import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegacion from "./componentes/navegacion";
import Inicio from "./pages/Inicio";
import Libros from "./pages/Libros";
import Categorias from "./pages/Categorias";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
