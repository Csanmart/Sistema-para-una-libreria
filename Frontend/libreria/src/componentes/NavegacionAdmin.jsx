import React from "react";
import { NavLink } from "react-router-dom";
import CerrarSesion from "./CerrarSesion";
import '../css/navegacion.css'
export default function NavagacionAdmin(){
    return(
        <nav className="nav">
            <nav>
                <ul>
                    <li>
                        <NavLink to="" end>
                            Dashboard    
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="Libros">
                            Libros
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="Categorias">
                            Categorias    
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="Usuarios">
                            Usuarios    
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <CerrarSesion></CerrarSesion>
        </nav>
    )
}