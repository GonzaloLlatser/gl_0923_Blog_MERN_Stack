import React from 'react'

export const Sidebar = () => {
  return (
    // Barra lateral
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form>
          <input type="text" />
          <button>Buscar</button>
        </form>
      </div>

      {/* <div className="add">
        <h3 className="title">Añadir pelicula</h3>
        <form>
          <input type="text" placeholder="Titulo" />
          <textarea placeholder="Descripción"></textarea>
          <input type="submit" value="Guardar"/>
        </form>
      </div> */}
    </aside>
  )
}
