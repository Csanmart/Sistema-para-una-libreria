import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CerrarSesion from "../CerrarSesion";
import '../../css/navegacion.css';

export default function NavegacionAdmin() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleNav = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <nav className={`nav ${isCollapsed ? 'collapsed' : ''}`}>
                <div className="nav-header">
                    <div className="nav-logo">
                        <span>LB</span>
                    </div>
                    <h2 className="nav-title">LibroManager</h2>
                </div>
                
                <div className="nav-menu">
                    <ul>
                        <li>
                            <NavLink to="" end className="nav-link">
                                <div className="nav-icon">📊</div>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="Libros" className="nav-link">
                                <div className="nav-icon">📚</div>
                                <span>Libros</span>
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="Categorias" className="nav-link">
                                <div className="nav-icon">🏷️</div>
                                <span>Categorías</span>
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="Usuarios" className="nav-link">
                                <div className="nav-icon">👥</div>
                                <span>Usuarios</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
                <div className="nav-footer">
                    <CerrarSesion />
                </div>
            </nav>
            
            {/* Botón para alternar el menú (opcional) */}
            <button className="toggle-nav" onClick={toggleNav}>
                {isCollapsed ? '▶' : '◀'}
            </button>
        </>
    );
}