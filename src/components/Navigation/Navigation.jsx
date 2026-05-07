import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={style.header}>
      <Link className={style.headerLink} to="/">
        <h1 className={style.headerTitle}>MoviesHook</h1>
      </Link>

      <ul className={style.headerList}>
        <li className={style.headerItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${style.headerLink} ${style.active}`
                : style.headerLink
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={style.headerItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${style.headerLink} ${style.active}`
                : style.headerLink
            }
            to="movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
