import React from "react";
import { Outlet } from "react-router-dom";
import NavegacionOperador from "../componentes/NavegacionOperador";
import '../css/layout.css'

export default function dasboardOperario(){
    return(
        <div>
            <aside className="navegacion">
                <NavegacionOperador/>
            </aside>
            <main className="content">
                <Outlet/>
            </main>
        </div>
    )
};