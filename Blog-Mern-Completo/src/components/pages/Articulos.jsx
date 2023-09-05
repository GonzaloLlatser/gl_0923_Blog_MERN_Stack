import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Listado } from './Listado';



{/* Aqui van los articulos */ }

export const Articulos = () => {

  let [articulos, setArticulos] = useState([]);


  useEffect(() => {
    conseguirArticulos();

  }, [])

  const conseguirArticulos = async () => {

    const { datos, cargando } = await Peticion(Global.url + "articulos", "GET");

    /*
    let peticion = await fetch(url, {
      method: "GET"
    });

    let datos = await peticion.json();
    console.log("Datos de la respuesta:", datos);
    */

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    } else {

    }
  }

  return (
    <>
      {
        articulos.length >= 1 ? <Listado articulos={articulos} setArticulos={setArticulos} /> : <h1> No hay artículos</h1>
      }
    </>
  )
}
