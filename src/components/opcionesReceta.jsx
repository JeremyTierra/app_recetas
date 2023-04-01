import React, { useState } from "react";
import "../styles/menuReceta.css"
import ModalReceta from "./modalReceta";
function eliminarTarea(id) {
    localStorage.removeItem(id);

}



function MenuReceta({ id, actualizarListaRecetas, title, image, description, ingredients, instructions }) {
    const [abrir, setAbrir] = useState(false);

    function cerrarModalEditar() {
        const elementos = document.querySelectorAll(".containerReceta");

        // Agregar o eliminar la clase "otra-clase" en cada elemento dependiendo de si está presente o no
        elementos.forEach((elemento) => {
            elemento.style.transition = "500ms ease";

            elemento.classList.add("efectoReceta");

        });
        setAbrir(false);
    }
    function abrirModalEditar() {
        // Seleccionar todos los elementos que contienen la clase "mi-clase"
        const elementos = document.querySelectorAll(".containerReceta");

        // Agregar o eliminar la clase "otra-clase" en cada elemento dependiendo de si está presente o no
        elementos.forEach((elemento) => {
            elemento.style.transition = "none";
            elemento.classList.remove("efectoReceta");
        });
        console.log(elementos);
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
            <ModalReceta title={title} image={image} description={description} ingredients={ingredients} instructions={instructions} cerrarReceta={cerrarModalEditar} modalTipo={"edicion"} id={id} actualizarListaRecetas={actualizarListaRecetas}></ModalReceta>
        )}

    </>)

}
export default MenuReceta;