import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import fetchMovies from '@/moviesApi';
import noImage from '@/img/no_img.jpg';
import style from './Cast.module.css';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //  useParams(), для получить значения динамических сегментов из URL, что бы реализовать http запрос с этим параметром
  const { movieId } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`..`);
  };

  useEffect(() => {
    const getMoviesCast = async () => {
      try {
        const resMovieCast = await fetchMovies(`movie/${movieId}/credits`);
        setCastList(resMovieCast?.cast || []);
        setError(null);
      } catch (error) {
        if (error.code === 'ERR_CANCELED') {
          // Запрос отменён — просто игнорируем
          return;
        } else {
          setError(
            `Failed to load cast list: ${error.message || 'Unknown error'}`,
          );
          console.error('Error when receiving movies:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    getMoviesCast();
  }, [movieId]);

  return (
    <div className={style.castContainer}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : castList.length === 0 ? (
        <p>We don't have a cast list for this movie</p>
      ) : (
        <ul className={style.castList}>
          {castList.map(castItem => (
            <li className={style.castItem} key={castItem.credit_id}>
              <img
                className={style.castImg}
                src={
                  castItem.profile_path
                    ? `https://image.tmdb.org/t/p/w500${castItem.profile_path}`
                    : noImage
                }
                alt={castItem.name}
              />
              <p className={style.actorName}>{castItem.original_name}</p>
              <span>character:</span>
              <p className={style.characterName}>{castItem.character}</p>
            </li>
          ))}
        </ul>
      )}

      <button className={style.castButton} type="button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default Cast;
