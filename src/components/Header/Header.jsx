import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/">
        <h1 className={style.headerTitle}>MoviesHook</h1>
      </Link>

      <ul className={style.headerList}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="movies">Movies</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
