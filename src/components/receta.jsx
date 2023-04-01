import React, { useState } from "react";
import "../styles/receta.css";
import imgReceta from "../assets/recipe.svg";
import MenuReceta from "./opcionesReceta";
import ModalReceta from "./modalReceta";
function Receta({ image, title, id, description,
  instructions, ingredients, actualizarListaRecetas }) {
  const [modalAbierto, setModalAbierto] = useState(false);

  function abrirReceta() {
    setModalAbierto(true);
  }

  function cerrarReceta() {
    setModalAbierto(false);
  }




  return (
    <>
      <div className="containerReceta efectoReceta" >
        <div className="recetaDatos" onClick={abrirReceta}>
          <img src={image ? image : imgReceta} alt="imagen de la receta" />
          <h3>{title ? title : "nombre de receta"}</h3>
        </div>
        <MenuReceta id={id} actualizarListaRecetas={actualizarListaRecetas} title={title} image={image} description={description} ingredients={ingredients} instructions={instructions}></MenuReceta>

      </div>
      {modalAbierto && (



        <ModalReceta title={title} image={image} description={description} ingredients={ingredients} instructions={instructions} cerrarReceta={cerrarReceta} modalTipo={"normal"} actualizarListaRecetas={actualizarListaRecetas}></ModalReceta>



      )}  </>
  );
}

export default Receta;