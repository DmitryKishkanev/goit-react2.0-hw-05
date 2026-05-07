import { useState, useEffect } from 'react';
import fetchMovies from '@/moviesApi';
import MList from '@/components/MList';
import style from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resMovies = await fetchMovies('trending/movie/day');
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
  }, []);

  return (
    <main>
      <h1 className={style.title}>Trending today</h1>
      <MList movies={movies} />
    </main>
  );
};

export default Home;
