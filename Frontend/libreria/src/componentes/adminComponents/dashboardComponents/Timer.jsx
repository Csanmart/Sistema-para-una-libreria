import React, {useState, useEffect} from "react";


export default function Timer(){
    const [hora, setHora] = useState(new Date());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setHora(new Date());
        }, 1000);
    
        return ()=> clearInterval(timer);
    }, [])
    
    const horaFormateada = hora.toLocaleTimeString();
    
    return(
        <div className="section-timer">
            <h2 className="timer">{horaFormateada}</h2>
        </div>
    )
}

