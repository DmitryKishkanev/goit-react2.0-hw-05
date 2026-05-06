import { Link } from 'react-router-dom';

const MItem = ({ movie }) => {
  return (
    <article>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />

      <div>
        <h2>{movie.title}</h2>
        <p>User Score: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <ul>
          {movie.genres &&
            movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
    </article>
  );
};

export default MItem;
