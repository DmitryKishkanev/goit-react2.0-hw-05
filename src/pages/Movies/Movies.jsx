import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '@/components/SearchBox';
import MList from '@/components/MList';
import fetchMovies from '@/moviesApi';
import style from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    setSearchParams(name ? { name } : {});
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }

    const getMovies = async () => {
      try {
        const resMovies = await fetchMovies('search/movie', {
          query: movieName,
        });

        setMovies(resMovies.results);
      } catch (error) {
        if (error.name === 'AbortError' || error.code === 'ERR_CANCELED') {
          // Запрос отменён — просто игнорируем
          return;
        }
        console.error('Error when receiving movies:', error);
      }
    };

    getMovies();
  }, [movieName]);

  return (
    <main className={style.main}>
      <SearchBox onSubmit={updateQueryString} />
      <MList movies={movies} />
    </main>
  );
};

export default Movies;
