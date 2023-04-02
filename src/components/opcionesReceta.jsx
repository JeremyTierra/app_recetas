import React, { useState } from "react";
import "../styles/opcionesReceta.css"
import ModalReceta from "./modalReceta";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function eliminarTarea(id) {
    localStorage.removeItem(id);
    toast.success('Receta eliminada con éxito', {
        position: 'top-right',
        autoClose: 800,

    });
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
            <div className={`boton botonEliminar d${id}`} onClick={() => {
                eliminarTarea(id)
                actualizarListaRecetas();
            }}><i className="bi bi-trash"></i></div>
            <div className={`boton botonEditar d${id}`}><i className="bi bi-pen" onClick={() => abrirModalEditar()}></i></div>
            <span className="material-symbols-sharp boton botonMas" onClick={() => {

                const elementos = document.querySelectorAll(`.d${id}`);
                elementos.forEach((element) => {
                    if (element.classList.contains("botonEditar")) {
                        element.classList.toggle("botonEditarAparecer");
                    } else if (element.classList.contains("botonEliminar")) {
                        element.classList.toggle("botonEliminarAparecer");

                    }

                });

            }}>
                add_circle
            </span>
        </div>

        {abrir && (
            <ModalReceta title={title} image={image} description={description} ingredients={ingredients} instructions={instructions} cerrarReceta={cerrarModalEditar} modalTipo={"edicion"} id={id} actualizarListaRecetas={actualizarListaRecetas}></ModalReceta>
        )}

    </>)

}
export default MenuReceta;