import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./CustomNavLink.module.css";
function CustomNavLink({ to, children }) {
  const addActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <NavLink className={addActive} to={to}>
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
