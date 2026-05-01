import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MoviesDetails = () => {
  return (
    <main>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </main>
  );
};

export default MoviesDetails;
