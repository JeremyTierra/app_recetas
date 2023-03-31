import React from "react"
import "../styles/modalReceta.css"
import  imgReceta from '../assets/recipe.svg'
function ModalReceta({title,image,description,ingredients,instructions,cerrarReceta}){
return(<div className="modalDatosReceta ">
<div className="modal-contenido">
          <h3>{title ? title : "nombre de receta"}</h3>
          <img src={image ? image : imgReceta} alt="Imagen Receta" />
          <h3>Descripcion</h3>
          <p>{description}</p>
          <h3>Ingredientes</h3>
          <p>{ingredients}</p>
          <h3>Pasos a seguir</h3>
          <p>{instructions}</p>
          <button onClick={cerrarReceta}>Cerrar</button>
        </div>
        </div>
        
        )
        
        }


export default ModalReceta;