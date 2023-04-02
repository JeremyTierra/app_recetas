import { useState } from 'react';
import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/formReceta.css";

const FormReceta = ({ actualizarListaRecetas }) => {
  // Estado inicial de la receta, con valores por defecto y un ID generado automáticamente
  const [recipeData, setRecipeData] = useState({
    title: '',
    image: null,
    description: '',
    ingredients: '',
    instructions: '',
    id: uuidv4()
  });

  // Función para mostrar una alerta de receta creada
  const alertaRecetaCreada = () => {
    toast.success('Receta creada', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Guardar la receta en el almacenamiento local del navegador
      localStorage.setItem(recipeData.id, JSON.stringify(recipeData));
      actualizarListaRecetas();
      alertaRecetaCreada();
      // Reiniciar los datos del formulario
      setRecipeData({
        title: '',
        image: null,
        description: '',
        ingredients: '',
        instructions: '',
        id: uuidv4()
      });

    } catch {
      alert("No se pudo guardar la Receta")
    }
  };

  // Función para manejar los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  // Función para manejar los cambios en el campo de imagen
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = () => {
      const urlImage = reader.result;
      setRecipeData({ ...recipeData, image: urlImage });
    }
  };


  return (
    <div className="container">
      <h1>Crear nueva receta</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={recipeData.title}
          onChange={handleInputChange}
        />

        <label htmlFor="image">Imagen:   (opcional)</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={recipeData.description}
          onChange={handleInputChange}
        />

        <label htmlFor="ingredients">Ingredientes:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={recipeData.ingredients}
          onChange={handleInputChange}
        />

        <label htmlFor="instructions">Instrucciones:</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipeData.instructions}
          onChange={handleInputChange}
        />

        <button type="submit" >Crear receta</button>
      </form>
    </div>
  );
};

export default FormReceta;
