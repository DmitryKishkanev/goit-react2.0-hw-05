import { Suspense, useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import MItem from '@/components/MItem';
import fetchMovies from '@/moviesApi';
import BackLink from '@/components/BackLink';
import style from './MoviesDetails.module.css';

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resMovies = await fetchMovies(`movie/${movieId}`);
        setMovie(resMovies);
      } catch (error) {
        if (error.name === 'AbortError' || error.code === 'ERR_CANCELED') {
          // Запрос отменён — просто игнорируем
          return;
        }
        console.error('Error when receiving movies:', error);
      }
    };

    getMovies();
  }, [movieId]);

  if (!movie) {
    return <p>Фильм не найден или данные ещё загружаются...</p>;
  }

  return (
    <main>
      {/* строчка для ESLint, что бы он не ругался на backLinkRef.current*/}
      {/* eslint-disable-next-line */}
      <BackLink to={backLinkRef.current}>Go back</BackLink>
      <MItem movie={movie} />

      <h3 className={style.title}>Additional information</h3>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink className={style.link} to="cast">
            Cast
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;
