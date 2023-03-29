import { useState } from 'react'
import './App.css'
import imgSombrero from "./assets/cocinero.png";
import Receta from "./components/receta"
import MenuAgregar from './components/menuAgregarReceta';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <section className='seccionHero'>
        <img className="imgSombrero" src={imgSombrero} alt="sombrero chef" />
        <h1>Mis Recetas</h1>
      </section>
      <section className='container seccionRecetas'>
      <Receta nombreReceta={"pollo asado"} imagen={imgSombrero}></Receta>
      <Receta id=""></Receta>
      <Receta></Receta>
      <Receta></Receta>
      <Receta></Receta>
      <Receta></Receta>

      </section>
<MenuAgregar></MenuAgregar>
    </div>
  )
}

export default App
