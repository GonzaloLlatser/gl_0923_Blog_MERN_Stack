import React from 'react'

{/* Aqui van los articulos */ }

export const Articulos = () => {
  return (
    <>
      <article className="articulo-item">
        <div className='mascara'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
        </div>
        <div className='datos'>
          <h3 className="title">Desarrollo Web</h3>
          <p className="description">articulo</p>
          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </div>
      </article>
    </>
  )
}
