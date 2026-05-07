import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import noPoster from '@/img/no_poster.jpg';
import style from './MList.module.css';

const MList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={style.movieList}>
      {movies.map(movie => (
        <li className={style.movieItem} key={movie.id}>
          <NavLink
            className={style.movieLink}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <img
              className={style.movieImg}
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                  : noPoster
              }
              alt={movie.title || movie.name}
            />

            <h3 className={style.movieTitle}>{movie.title}</h3>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MList;
