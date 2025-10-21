import React, {useState, useEffect} from "react";


const MostrarNombre = ()=>{
    const [nombre, setNombre] = useState("")

    useEffect(()=>{
        const buscarNombre = localStorage.getItem("nombre");
        if(buscarNombre){
            setNombre(buscarNombre)
        }else{
            alert('No se encuentra el nombre')
        }

        console.log(buscarNombre)
    },  [])
    
    return(

        <div>
            <h2>Bienvenido, {nombre}</h2>
        </div>
    )
}

export default MostrarNombre;