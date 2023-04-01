import React, { useState, useEffect } from "react"
import "../styles/modalReceta.css"
import imgReceta from '../assets/recipe.svg'
function ModalReceta({ title, image, description, ingredients, instructions, cerrarReceta, modalTipo, id,actualizarListaRecetas}) {
  // Edicion de Receta
  const [recetaEditar, setRecetaEditar] = useState({});

  const [modalNormal, setModalNormal] = useState(false);
  const [modalEdicion, setModalEdicion] = useState(false);

  function editarReceta(e) {
    e.preventDefault();
    localStorage.setItem(id,JSON.stringify(recetaEditar));
    actualizarListaRecetas();
  }

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
    const urlImage = reader.result;
    setRecetaEditar({ ...recetaEditar, image: urlImage });}

  };


  useEffect(() => {
    const data = localStorage.getItem(id);
    setRecetaEditar(JSON.parse(data));

    if (modalTipo == "edicion") {
      setModalEdicion(true);
      console.log(recetaEditar);
    }
    else if (modalTipo == "normal") {
      setModalNormal(true);
    }

    console.log("El componente se ha montado");
  }, []);

  return (
    <>
      {modalNormal && (
        <div className="modalDatosReceta ">
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
      )}

      {modalEdicion && (
        <div className="modalDatosReceta ">
          <div className="modal-contenido">
            <form onSubmit={(e) => editarReceta(e)}>
              <input
                type="text"
                value={recetaEditar.title }
                onChange={(e) => {
                  setRecetaEditar({ ...recetaEditar, title: e.target.value });
                }}
              />
              <img
                src={recetaEditar.image ? recetaEditar.image : imgReceta}
                alt="Imagen Receta"
              />
              <input type="file" onChange={handleImageChange}/>
              <h3>Descripcion</h3>
              <input
                type="text"
                value={recetaEditar.description}
                onChange={(e) => {
                  setRecetaEditar({ ...recetaEditar, description: e.target.value });
                }}
              />
              <h3>Ingredientes</h3>
              <input
                type="text"
                value={recetaEditar.ingredients}
                onChange={(e) => {
                  setRecetaEditar({ ...recetaEditar, ingredients: e.target.value });
                }}
              />
              <h3>Pasos a seguir</h3>
              <input
                type="text"
                value={recetaEditar.instructions}
                onChange={(e) => {
                  setRecetaEditar({ ...recetaEditar, instructions: e.target.value });
                }}
              />
              <button onClick={cerrarReceta}>Cerrar</button>
              <button type="submit" id="guardar">
                Guardar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalReceta;