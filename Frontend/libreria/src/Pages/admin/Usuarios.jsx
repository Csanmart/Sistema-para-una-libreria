import TablaDeUsuarios from '../../componentes/adminComponents/UsuariosComponents/TablaDeUsuarios'
import RegistroUsuarios from '../../componentes/adminComponents/UsuariosComponents/RegistroUsuarios'

import '../../css/usuarios.css'


export default function Usuarios(){
    return (
      <div className="content-dashboard">
        <header className="header">
          <h2>Usuarios</h2>
        </header>

        <section className="table-section">
          <h3>Lista de usuarios</h3>
          <div className="card">
            <TablaDeUsuarios/>
          </div>
        </section>
        <section className="form-section">
          <h3>Crear usuarios</h3>
          <div className="card from-card">
            <RegistroUsuarios/>
          </div>
        </section>
        <footer className="end-page">
          <p>Derechos reservados a csanmart ®️</p>
        </footer>
      </div>
    );
};

