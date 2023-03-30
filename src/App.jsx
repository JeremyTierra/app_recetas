import { useState, useEffect } from 'react'
import './App.css'
import imgSombrero from "./assets/cocinero.png";
import Receta from "./components/receta"
import MenuAgregar from './components/menuAgregarReceta';




function App() {

  const [listaRecetas, setListaRecetas] = useState([])

  useEffect(() => {
    actualizarListaRecetas();
  }, []);
  async function actualizarListaRecetas() {
    // Obtener todos los objetos de localStorage
    const recetas = await Object.values(localStorage);
    // Crear un componente Receta para cada objeto
    setListaRecetas(recetas.map((receta) => {
      const data = JSON.parse(receta);// Agregado para ver el contenido de receta en la consola
      return (
        <Receta key={data.id} imagen={data.image} nombreReceta={data.title} id={data.id} />
      );
    }));
  }




  return (
    <div className="App">

      <section className='seccionHero'>
        <img className="imgSombrero" src={imgSombrero} alt="sombrero chef" />
        <h1>Mis Recetas</h1>
      </section>
      <section className='container seccionRecetas'>
        {listaRecetas}
      </section>
      <MenuAgregar actualizarListaRecetas={actualizarListaRecetas}></MenuAgregar>
    </div>
  )
}

export default App
