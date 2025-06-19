import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import CustomNavLink from "../CustomNavLink/CustomNavLink";

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const addActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav>
      <ul className={css.list}>
        <li>
          <CustomNavLink to={"/"}>Home</CustomNavLink>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <CustomNavLink className={addActive} to={"/cocktails"}>
                Cocktails
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink className={addActive} to={"/searchCocktails"}>
                Search Cocktails
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink className={addActive} to={"/photos"}>
                Photos
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink className={addActive} to={"/todos"}>
                Todos
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink className={addActive} to={"/points"}>
                Points
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink className={addActive} to={"/props"}>
                Props
              </CustomNavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
