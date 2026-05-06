import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import noPoster from '@/img/no_poster.jpg';

const MList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                  : noPoster
              }
              alt={movie.title || movie.name}
            />
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
