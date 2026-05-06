import { Suspense, useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import MItem from '@/components/MItem';
import fetchMovies from '@/moviesApi';

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
        console.log(resMovies);
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
      <Link to={backLinkRef.current}>Go back</Link>
      <MItem movie={movie} />

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;
