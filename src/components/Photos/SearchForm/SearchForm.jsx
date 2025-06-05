import { useState } from "react";
import toast from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return toast.error("Enter some query");
    }
    onSubmit(value);

    setValue("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className={css.input}
        type="text"
        value={value}
      />
      <button className={css.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
};

export default SearchForm;
