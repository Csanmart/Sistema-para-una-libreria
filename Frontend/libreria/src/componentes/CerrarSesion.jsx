import React from "react";
import { useNavigate } from "react-router-dom";

export default function CerrarSesion(){
    const navegacion = useNavigate();
    
    const cerrar = ()=>{
        localStorage.clear()
        navegacion('/')
    }

    return(
        <button onClick={cerrar}>Cerrar sesion</button>
    )
}