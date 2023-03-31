import React, { useState } from "react";
import "../styles/menuReceta.css"
import ModalReceta from "./modalReceta";
function eliminarTarea(id) {
    localStorage.removeItem(id);

}



function MenuReceta({ id, actualizarListaRecetas, title, image, description, ingredients, instructions }) {
    const [abrir, setAbrir] = useState(false);

    function cerrarModalEditar() {
        setAbrir(false);
    }
    function abrirModalEditar() {
        setAbrir(true);
    }

    return (<>

        <div className="contenedorMenuEditar">
            <div className="boton botonEliminar" onClick={() => {
                eliminarTarea(id)
                actualizarListaRecetas();
            }}><i className="bi bi-trash"></i></div>
            <div className="boton botonEditar"><i className="bi bi-pen" onClick={() => abrirModalEditar()}></i></div>
            <span className="material-symbols-sharp boton botonMas" onClick={(e) => expandir(e)}>
                add_circle
            </span>
        </div>

        {abrir && (
            <ModalReceta title={title} image={image} description={description} ingredients={ingredients} instructions={instructions} cerrarReceta={cerrarModalEditar}></ModalReceta>
        )}

    </>)

}
export default MenuReceta;