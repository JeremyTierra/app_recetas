import { useState } from 'react'
import './App.css'
import imgSombrero from "./assets/cocinero.png";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <section className='seccionHero'>
        <img class="imgSombrero" src={imgSombrero} alt="sombrero chef" />
        <h1>Mis Recetas</h1>
      </section>
      <section className='container seccionRecetas'>

      </section>


    </div>
  )
}

export default App
