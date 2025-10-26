import React from "react";
import '../../css/Dashboard.css'
import MostrarNombre from "../../componentes/MostrarNombre";

export default function Dashboard(){
    return( 
        <div className="content-dashboard">
            <MostrarNombre/>
        </div>
    )
}