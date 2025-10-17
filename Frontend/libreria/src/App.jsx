import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboarLayout from "./layouts/dashboardLayout";
import InicioDeSesion from "./componentes/InicioDeSesion";


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<InicioDeSesion/>}/>
        
        {/*Rotas para el administrador*/}
        <Route element={<DashboarLayout/>}>
          <Route path="/admin/dashboard" element={<DashboarLayout/>}/>
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
