import React from "react";
import { Link } from "react-router-dom";
import CerrarSesion from "./CerrarSesion";
import './css/navegacion.css'
export default function NavagacionAdmin(){
    return(
        <nav className="nav">
            <Link to = {'/dashboardAdmin'}>Inicio</Link>
            <Link to = {'/Libros'}>Crear Libros</Link>
            <Link to = {'/Categorias'}>Crear categorias</Link>
            <Link to={'Usuarios'}>Lista de operarios</Link>
            <button onClick={CerrarSesion}>Cerrar sesion</button>
        </nav>
    )
}