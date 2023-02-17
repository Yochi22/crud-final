import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './listmovies.css';



function ListMovies(){

    const [datamovies, setDataMovies] = useState([])
    
    useEffect(() => {
    axios.get('http://localhost:5000/movie/getmovies').then( res => {
      setDataMovies(res.data)
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
    
    }, [])
    
    const handleDelete = (id) => {
      axios
        .delete(`http://localhost:5000/movie/getmovies/${id}`)
        .then(() => {
          setDataMovies(dataMovies.filter((movie) => movie._id !== id));
          
        })
        .catch((err) => {
          console.log(err);
        });
        
    };
    
    
    
    
    const listmovies = datamovies.map(movie=> {
      return(
        <div className='container' key={movie._id}>
        <div className='row'>
          <div className='columna-lista'>
          <ul className='list-group'>
            <li className='list-group-item-title' >{movie.mov_title}</li>
            <li className='list-group-item'>{movie.mov_year}</li>
            <li className='list-group-item'>{movie.mov_time}</li>
            <li className='list-group-item'>{movie.mov_lang}</li>
            <li className='list-group-item'>{movie.mov_dt_rel}</li>
            <li className='list-group-item'>{movie.mov_rel_country}</li>
          </ul>
          <Link to={`/editmovie/${movie._id}`}><li className='btn btn-success'>Editar</li></Link>
            &nbsp;
            <button onClick={() => handleDelete(movie._id)} className='btn btn-danger'>Eliminar</button>
            <hr className='mt-4'/>
          </div>
        </div>
      </div>
      )
    })
    
    
    
      return (
        <div className='container-movies'>
          <h2>LISTA DE PELÍCULAS</h2>
          {listmovies}
        </div>
      )
    }
    
    export default ListMovies;
    