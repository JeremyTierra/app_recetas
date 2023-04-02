import React, { useState, useEffect } from "react"
import "../styles/modalReceta.css"
import imgReceta from '../assets/recipe.svg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalReceta({
  title,
  image,
  description,
  ingredients,
  instructions,
  cerrarReceta,
  modalTipo,
  id,
  actualizarListaRecetas,
}) {
  // Estados del componente
  const [recetaEditar, setRecetaEditar] = useState({});
  const [modalNormal, setModalNormal] = useState(false);
  const [modalEdicion, setModalEdicion] = useState(false);

  // Función para mostrar una alerta cuando se edita y guarda una receta
  const alertaRecetaEditada = () => {
    toast.success('Receta guardada', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Función para guardar la receta editada en localStorage
  function editarReceta(e) {
    e.preventDefault();
    try {
      localStorage.setItem(id, JSON.stringify(recetaEditar));
      actualizarListaRecetas();
      alertaRecetaEditada();
    } catch {
      alert('Error al guardar');
    }
  }

  // Función para manejar el cambio de imagen al seleccionar un archivo
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      const urlImage = reader.result;
      setRecetaEditar({ ...recetaEditar, image: urlImage });
    };
  };

  // useEffect para obtener los datos de la receta a editadar de localStorage
  useEffect(() => {
    const data = localStorage.getItem(id);
    setRecetaEditar(JSON.parse(data));

    // Mostrar el modal de edición o normal según la prop modalTipo
    if (modalTipo === 'edicion') {
      setModalEdicion(true);
    } else if (modalTipo === 'normal') {
      setModalNormal(true);
    }
  }, []);

  return (
    <>
      {modalNormal && (
        <div className="modalDatosReceta ">
          <div className="modal-contenido">
          <div className="modal-contenido">
            <h3>{title ? title : "nombre de receta"}</h3>
            <img src={image ? image : imgReceta} alt="Imagen Receta" />
            <h3>Descripcion</h3>
            <textarea readOnly  value={description}></textarea>
            <h3>Ingredientes</h3>
            <textarea readOnly value={ingredients}></textarea>
            <h3>Pasos a seguir</h3>
            <textarea readOnly value={instructions}></textarea>
            <button onClick={cerrarReceta}>Cerrar</button>
          </div>
          </div>
        </div>
      )}

      {modalEdicion && (
        <div className="modalDatosReceta ">
          <div className="modal-contenido">
            <form  className="modal-contenido" onSubmit={(e) => editarReceta(e)}>
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
              <textarea
                type="text"
                value={recetaEditar.description}
                onChange={(e) => {
                  setRecetaEditar({ ...recetaEditar, description: e.target.value });
                }}
              />
              <h3>Ingredientes</h3>
              <textarea
                type="text"
                value={recetaEditar.ingredients}
                onChange={(e) => {
                  setRecetaEditar({ ...recetaEditar, ingredients: e.target.value });
                }}
              />
              <h3>Pasos a seguir</h3>
              <textarea
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