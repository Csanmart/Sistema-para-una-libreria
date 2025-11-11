import React from "react";
import '../../css/Dashboard.css'
import MostrarNombre from "../../componentes/MostrarNombre";
import Timer from "../../componentes/adminComponents/dashboardComponents/Timer";
import BotonesRedireccion from "../../componentes/adminComponents/dashboardComponents/BotonesRedireccion";

export default function Dashboard(){
    return( 
        <div className="content-dashboard">
            <section className="Section-Name">
                <h2>
                    <MostrarNombre/>
                </h2>
            </section>
            <section className="section-timer">
                <h3>
                    <Timer/>
                </h3>
            </section>
            <section className="section-botons">
                <h4>Botones rapidos</h4>
                <BotonesRedireccion/>
            </section>
        </div>
    )
}