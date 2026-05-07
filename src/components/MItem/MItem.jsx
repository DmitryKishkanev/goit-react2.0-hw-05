import PropTypes from 'prop-types';
import style from './MItem.module.css';

const MItem = ({ movie }) => {
  return (
    <article className={style.article}>
      <img
        className={style.img}
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />

      <div className={style.infoBox}>
        <h2 className={style.movieTitle}>{movie.title}</h2>
        <p className={style.scoreText}>User Score: {movie.vote_average}</p>
        <h3 className={style.overviewTitle}>Overview</h3>
        <p className={style.overviewText}>{movie.overview}</p>
        <h4 className={style.genresTitle}>Genres</h4>
        <ul className={style.genresList}>
          {movie.genres &&
            movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
    </article>
  );
};

MItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default MItem;
