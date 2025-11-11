import React from "react";
import { NavLink } from "react-router-dom";
import '../../../css/BotonesRedireccion.css'


export default function BotonesRedireccion(){
    const buttonList = [{id: 1, nombre: 'Crear libros',to: '/Libros'},
        {id: 2, nombre: 'Crear categorias', to: '/Categorias'},
        {id: 3, nombre: 'Crear Usuarios', to:'/Usuarios'}
    ];

    return(
        <div className="bottons">
            {buttonList.map((u)=>(
                <button key={u.id} to={u.to}>{u.nombre}</button>
            ))}
        </div>
    )

}