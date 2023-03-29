import React from "react";
import "../styles/receta.css"
import imgReceta from "../assets/recipe.svg";
import MenuReceta from "./opcionesReceta";

function Receta({ imagen, nombreReceta }) {
    return <div className="containerReceta">
             
        <img src={imagen ? imagen : imgReceta} alt="imagen de la receta"  />
        <h3>{nombreReceta ? nombreReceta : "nombre de receta"}</h3>
        <MenuReceta ></MenuReceta>
    </div>
}

export default Receta;