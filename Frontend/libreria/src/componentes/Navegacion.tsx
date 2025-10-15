import {Link} from 'react-router-dom';

export default function Navegacion(){
    const rol = localStorage.getItem("rol")
    return(
        <nav>
            {rol == "Administrador" &&(
                <>
                <Link to="/admin">Panel Admin</Link>
                <Link to="/categorias">Categorías</Link>
                <Link to="/libros">Libros</Link>
                <Link to="/usuarios">Usuarios</Link>
                </>
            )}

            {rol == "Operario" && (
                <>
                    <Link to="/operario">Registrar préstamo</Link>
                </>
            )}
            <button  onClick={()=>{
                localStorage.clear()
                window.location.href = "/";
            }}>cerrar sesion</button>

        </nav>
    )
}