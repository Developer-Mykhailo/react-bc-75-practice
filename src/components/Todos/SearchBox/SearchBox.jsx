import { useDispatch } from "react-redux";
import style from "./SearchBox.module.css";
import { setFilter } from "../../../redux/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <input
      onChange={(e) => dispatch(setFilter(e.target.value))}
      className={style.input}
    />
  );
};

export default SearchBox;
