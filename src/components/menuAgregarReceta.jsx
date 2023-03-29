import React from "react";
import "../styles/botonAgregar.css"
import FormReceta from "./formReceta";
function MenuAgregar() {
  return (<>

    {/* boton agregar Receta */}
    <button type="button" className="btn botonAgregar" data-bs-toggle="modal" data-bs-target="#miModal">
    <i className="bi bi-plus-lg"></i> </button>

    {/* Entrada de Receta */}
    <div className="modal fade" id="miModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel" ></h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <FormReceta></FormReceta>
         
          </div>
        </div>
      </div>
    </div>
  </>
  )

}
export default MenuAgregar;