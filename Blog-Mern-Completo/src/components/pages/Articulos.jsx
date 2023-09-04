import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global';



{/* Aqui van los articulos */ }

export const Articulos = () => {

  let [articulos, setArticulos] = useState([]);

  useEffect(() => {
    conseguirArticulos();

  }, [])

  const conseguirArticulos = async () => {
    const url = Global.url + "articulos";
    let peticion = await fetch(url, {
      method: "GET"
    });

    let datos = await peticion.json();
    console.log("Datos de la respuesta:", datos);

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    } else {

    }
  }

  return (
    <>
      {
        articulos.length >= 1 ? (
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
          :
          (
            <h1> No hay artículos</h1>
          )
      }
    </>
  )
}
