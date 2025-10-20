import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboarLayout from "./layouts/dashboardLayout";
import InicioDeSesion from "./Pages/autenticacion/InicioDeSesion";
import Libros from './Pages/admin/Libros'
import Usuarios from './Pages/admin/Usuarios'
import Categorias from './Pages/admin/Categorias'
import Dashboard from './Pages/admin/Dashboard'

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<InicioDeSesion/>}/>
        
        {/*Rotas para el administrador*/}
        <Route path="/admin" element={<DashboarLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="libros" element={<Libros/>}/>
          <Route path="categorias" element={<Categorias/>}/>
          <Route path="usuarios" element={<Usuarios/>}/>
        </Route>        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
