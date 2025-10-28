import React, {useEffect, useState} from "react"
import {usuarioService} from '../../service/Administrador/Usuarios';
import BotonesOpciones from "../../componentes/adminComponents/BotonesOpciones";

export default function Usuarios(){
    
    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState(null);


    console.log(usuarioService)
    useEffect(()=>{
        const getAllUsers = async ()=> {
            try{
                const data = await usuarioService.mostrarTodos();
                setUsuarios(data.data);
                console.log(data)
            }
            catch(error){
                setError('Error cargando los usuarios...')
                console.log(error)
            }
        }
        getAllUsers()
    }, []);

    
    return (
      <div className="content-dashboard">
        <header className="header">
          <h2>Usuarios</h2>
        </header>

        <section className="table_users">
          <h3>Lista de usuarios</h3>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <table>
            <thead>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>CARGO</th>
              <th>OPCIONES</th>
            </thead>
            <tbody>
              {usuarios.length > 0 ? (
                usuarios.map((u) => (
                  <tr key={u.id_usuario}>
                    <td>{u.id_usuario}</td>
                    <td>{u.nombre}</td>
                    <td>{u.rol}</td>
                    <td>
                      <BotonesOpciones id_usuario={u.id_usuario} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Cargando usuarios...</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
        <section className="add_users">
          
        </section>
      </div>
    );

    console.log(usuarioService)
};

