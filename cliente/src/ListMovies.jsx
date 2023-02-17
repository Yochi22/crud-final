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
              .delete(`https://videoclub3.onrender.com/movies/${id}`)
              .then(() => {
                setDataMovies(datamovies.filter((movie) => movie._id !== id));
                
              })
              .catch((err) => {
                console.log(err);
              });
              
          };




        const listmovies = datamovies.map(Movies=> {
            return(
              <div className='container' key={Movies._id}>
              <div className='row'>
                <div className='columna-lista'>
                <ul className='list-group'>
                  <li className='list-group-item-title' >{Movies.mov_title}</li>
                  <li className='list-group-item'>{Movies.mov_year}</li>
                  <li className='list-group-item'>{Movies.mov_time}</li>
                  <li className='list-group-item'>{Movies.mov_lang}</li>
                  <li className='list-group-item'>{Movies.mov_dt_rel}</li>
                  <li className='list-group-item'>{Movies.mov_rel_country}</li>
                </ul>
                <Link to={`/editmovie/${Movies._id}`}><li className='btn btn-success'>Editar</li></Link>
                  &nbsp;
                  <button onClick={() => handleDelete(Movies._id)} className='btn btn-danger'>Eliminar</button>
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



