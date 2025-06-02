import style from "./TodoItem.module.css";
import { RiDeleteBinLine } from "react-icons/ri";

const TodoItem = ({ text, count, deleteTodo, id }) => {
  return (
    <div className={style.box}>
      <h3 className={style.todoCount}>TODO #{count}</h3>
      <h3 className={style.text}>{text}</h3>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoItem;
