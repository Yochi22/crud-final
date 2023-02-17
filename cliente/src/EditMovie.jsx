import axios from 'axios';
import React, {useState, useEffect} from 'react'
import uniqid from 'uniqid'
import { useParams } from 'react-router-dom';


function EditMovie(){

const params = useParams()

  const [titulo, setTitulo] = useState('')
  const [año, setAño] = useState('')
  const [duracion, setDuracion] = useState('')
  const [fecha, setFecha] = useState('')
  const [pais, setPais] = useState('')
  const [idioma, setIdioma] = useState('')


useEffect(() => {
    axios.post('http://localhost:5000/movie/obtenerdatamovie', {_id: params._id}).then(res => {
        console.log(res.data[0]) 
        const datamovies = res.data[0]
        setTitulo(datamovies.titulo)
        setAño(datamovies.año)
        setDuracion(datamovies.duracion)
        setFecha(datamovies.fecha)
        setIdioma(datamovies.idioma)
        setPais(datamovies.pais)    
  
    })
  }, [])
  
  
function editMovie(){

}



    return (
        <div className='container'>
        <div className='row'>
               <div className='col-sm-6 offset-3'>
                   <h2 className='mt-4'>EDITA LA PELÍCULA</h2>
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
           <button className='btn btn-success' onClick={editMovie}>Enviar</button>
               </div>
        </div>
    )
  }
  
  export default EditMovie;