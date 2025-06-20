import s from "./ToggleIcon.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ToggleIcon = ({ onClick, showPassword }) => {
  return (
    <button className={s.iconBtn} onClick={onClick}>
      {showPassword ? <FaEye /> : <FaEyeSlash />}
    </button>
  );
};

export default ToggleIcon;
