import React from "react";
import "../styles.css/menuReceta.css"
const contenedorMenuEditar =document.querySelector(".contenedorMenuEditar");
function expandir(e){
    console.log(e,contenedorMenuEditar)

    contenedorMenuEditar.classList.toggle("oculto");
}
function MenuReceta() {
    return (<div className="contenedorMenuEditar">
        <div className="boton botonEliminar"></div>
        <div className="boton botonEditar"></div>
        <span className="material-symbols-sharp boton botonMas" onClick={(e)=>expandir(e)}>
            add_circle
        </span>
    </div>)

}
export default MenuReceta;