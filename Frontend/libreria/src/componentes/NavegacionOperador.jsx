import React from 'react';
import {Link} from 'react-router-dom';
import './css/navegacion.css';
import CerrarSesion from './CerrarSesion';

export default function NavegacionOperador(){
    return(
        <nav className='nav'>
            <Link to={'/inicio'}>Inicio</Link>
            <Link to={'/librosDisponibles'}>Libros Disponibles</Link>
            <Link to={'/Prestamo'}>Prestamos</Link>
            <button onClick={CerrarSesion}>Cerrar la sesion</button>
        </nav>
    )
}