import style from "./SearchBox.module.css";

const SearchBox = ({ handleChangeFilter }) => {
  return (
    <input
      onChange={(e) => handleChangeFilter(e.target.value)}
      className={style.input}
    />
  );
};

export default SearchBox;
