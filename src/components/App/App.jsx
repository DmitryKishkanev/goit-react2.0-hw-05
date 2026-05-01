import style from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Movies from '@/pages/Movies';
import Layout from '@/components/Layout';
import MoviesDetails from '@/pages/MoviesDetails';
import Cact from '@/components/Cast';
import Reviews from '@/components/Reviews';

export default function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cact />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
