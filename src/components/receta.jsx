import React from "react";
import "../styles.css/receta.css"
import imgReceta from "../assets/recipe.svg";
import MenuReceta from "./menuReceta";

function Receta({ imagen, nombreReceta }) {
    return <div className="containerReceta">
             
        <img src={imagen ? imagen : imgReceta} alt="imagen de la receta" srcset="" />
        <h3>{nombreReceta ? nombreReceta : "nombre de receta"}</h3>
        <MenuReceta id={1}></MenuReceta>
    </div>
}

export default Receta;