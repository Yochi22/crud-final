import React, { useState } from 'react'
import uniqid from 'uniqid'


function AddMovie(){

const [titulo, setTitulo] = useState('')
const [año, setAño] = useState('')
const [duracion, setDuracion] = useState('')
const [fecha, setFecha] = useState('')
const [pais, setPais] = useState('')
const [idioma, setIdioma] = useState('')


function movieAdd() {

var movies = {

  mov_title: titulo,
  mov_year: año,
  mov_time: duracion,
  mov_lang: idioma,
  mov_dt_rel: fecha,
  mov_rel_country: pais,
  idmovie: uniqid()

}
 console.log(movies)

}
  
  return (
    <div className='container'>
     <div className='row'>
            <div className='col-sm-6 offset-3'>
                <h2 className='mt-4'>AGREGA UNA NUEVA PELÍCULA</h2>
            </div>
     </div>

     <div className='col-sm-6 offset-3'>
                <div className='mb-3'>
         <label htmlFor="titulo" className='form-label'>Título</label>
          <input type="text" className='form-control' value={titulo} onChange={(e) => {setTitulo(e.target.value)}}/>
                </div>


                <div>
          <label htmlFor="año" className='form-label'>Año</label>
          <input type="text" className='form-control' value={año} onChange={(e) => {setAño(e.target.value)}} />
        </div>

        <div>
          <label htmlFor="duración" className='form-label'>Duración</label>
          <input type="text" className='form-control' value={duracion} onChange={(e) => {setDuracion(e.target.value)}}/>
        </div>

        <div>
          <label htmlFor="idioma" className='form-label'>Idioma</label>
          <input type="text" className='form-control' value={idioma} onChange={(e) => {setIdioma(e.target.value)}}/>
        </div>

        <div>
          <label htmlFor="fecha" className='form-label'>Fecha</label>
          <input type="date" className='form-control' value={fecha} onChange={(e) => {setFecha(e.target.value)}}/>
        </div>

        <div>
          <label htmlFor="pais" className='form-label'>País</label>
          <input type="text" className='form-control' value={pais} onChange={(e) => {setPais(e.target.value)}}/>
        </div>

    <button className='btn btn-success' onClick={movieAdd}>Enviar</button>
            </div>
     </div>






   
  )
}

export default AddMovie;