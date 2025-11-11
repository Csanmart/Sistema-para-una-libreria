import '../../css/Dashboard.css'
import '../../css/categorias.css'
import TablaCategorias from '../../componentes/adminComponents/CategoriasComponents/TablaCategorias'
import RegistrarCategorias from '../../componentes/adminComponents/CategoriasComponents/RegistrarCategorias'
import LibrosPorCategorias from '../../componentes/adminComponents/CategoriasComponents/LibrosPorCategorias'



export default function Categorias(){

    return(
        <div className="content-dashboard">
            <header className='header'>
                <h2>Categorias</h2>
            </header>

            <section className='table-section'>
                <h3>Lista Categorias</h3>
                <div className='card'>
                    <TablaCategorias/>
                </div>
            </section>

            <section className='form-section'>
                <h3>Agregar categorias</h3>
                <div className='card'>
                    <RegistrarCategorias/>
                </div>
            </section>

            <section className='cards-section'>
                <h3>Buscar libros de la categoria</h3>
                <div className='card'>
                    <LibrosPorCategorias/>;
                </div>
            </section>

            <footer className="end-page">
                <p>Derechos reservados a csanmart ®️</p>
            </footer>
        </div>
    )
};