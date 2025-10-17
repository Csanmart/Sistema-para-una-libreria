import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboarLayout from "./layouts/dashboardLayout";
import dasboardOperario from "./layouts/dashboardOperarioLayout";
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

        <Route element={<dasboardOperario/>}>
          <Route path="/operario/dashboardOperario" element={<dasboardOperario/>}/>
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
