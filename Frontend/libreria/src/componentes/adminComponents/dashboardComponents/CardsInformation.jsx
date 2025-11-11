import React, {useState, useEffect} from "react";
import { resumenService } from "../../../service/Administrador/Resumen";

export default function CardsInformation(){
    const [data, setData]= useState({
        totalUsuarios: 0,
        totalCategorias: 0,
        totalPrestamo: 0,
        totalLibros: 0
    });

    const[error, setError] = useState(null)

    useEffect(()=>{
        const dataFetch= async()=>{
            try{
                const response = await resumenService.resumen()
                setData(response.data);
            }catch(error){
                setError('Error cargando el resumen de los datos...')                 
            }
        }
        dataFetch();
    }, [])

}