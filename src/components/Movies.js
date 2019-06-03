import React from 'react';
import { movies } from '../data';
//movies.map()
const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div>
          <h3>{movie.title}</h3>
          <h3>{movie.time}</h3>
         <ul>
          {movie.genres.map(genre =>(
            <li>{genre}</li>
           
          ) )}
          </ul>
        </div>))}
    </div>
  );
};

export default Movies;
