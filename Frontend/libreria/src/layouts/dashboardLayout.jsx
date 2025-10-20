import React from "react";
import { Outlet } from "react-router-dom";
import NavegacionAdmin from "../componentes/NavegacionAdmin";

export default function DashboarLayout(){
    return(
        <div className="layout">
            {/*Navegacion fija*/}
            <header>
                <NavegacionAdmin/>
            </header>

            <main className="content">
                <Outlet/>
            </main>
        </div>
    )
};