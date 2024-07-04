import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies/popular');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching latest movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container" style={{ marginTop: '70px' }}>
      <h1>Películas de Estreno</h1>
      <div className="row">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.overview}</p>
                  <p className="card-text">Release Date: {movie.release_date}</p>
                  <p className="card-text">Popularity: {movie.popularity}</p>
                  <p className="card-text">Vote Average: {movie.vote_average}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay películas disponibles</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
