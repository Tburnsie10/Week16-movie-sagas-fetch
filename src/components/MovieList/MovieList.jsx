import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Link } from 'react-router-dom';

function MovieList() {
    async function setDetail(event){
        let id = await event.target.id
        let response = await fetch(`/api/movie/${id}`) 
        let data = await response.json()
        await console.log(data)
        await dispatch({type:'SET_DETAIL', payload:data})
        window.location.href = '#/detail';}
        
    
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div onClick={setDetail} key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img id={movie.id} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;