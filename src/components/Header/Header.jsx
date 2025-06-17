import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";

const addActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink className={addActive} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={"/login"}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={"/register"}>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={"/cocktails"}>
              Cocktails
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={"/searchCocktails"}>
              Search Cocktails
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={"/photos"}>
              Photos
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={"/todos"}>
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={"/points"}>
              Points
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={"/props"}>
              Props
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
