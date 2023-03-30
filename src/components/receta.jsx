import React from "react";
import "../styles/receta.css"
import imgReceta from "../assets/recipe.svg";
import MenuReceta from "./opcionesReceta";
function abrirReceta(e) {
console.log(e.target);
}
function Receta({ imagen, nombreReceta ,id}) {
    return <div className="containerReceta" onClick={abrirReceta}>
             
        <img src={imagen ? imagen : imgReceta} alt="imagen de la receta"  />
        <h3>{nombreReceta ? nombreReceta : "nombre de receta"}</h3>
        <MenuReceta ></MenuReceta>
    </div>

}

export default Receta;