import { useState } from "react";
import toast from "react-hot-toast";
import style from "./Form.module.css";
import { CiCirclePlus } from "react-icons/ci";

const Form = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      toast.error("Enter some text");
      return;
    }
    onSubmit(text);
    setText("");
  };

  return (
    <form className={style.form} onSubmit={handleSumbit}>
      <input
        className={style.input}
        type="text"
        name="text"
        onChange={handleChange}
        value={text}
      />
      <button className={style.button} type="submit">
        <CiCirclePlus className={style.icon} />
      </button>
    </form>
  );
};

export default Form;
