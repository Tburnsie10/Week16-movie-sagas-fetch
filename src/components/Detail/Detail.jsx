import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Detail.css'

function Detail() {

    const dispatch = useDispatch();
    const detail = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAIL' });
    }, []);

    return (
        <main>
            <h1>Detail</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;