import React from 'react'

export const Listado = ({articulos, setArticulos}) => {
  return (
    articulos.map(articulo => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className='mascara'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
            </div>
            <div className='datos'>
              <h3 className="title">{articulo.titulo} Web</h3>
              <p className="description">{articulo.contenido}</p>
              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </div>
          </article>
        );
      })
  )
}
