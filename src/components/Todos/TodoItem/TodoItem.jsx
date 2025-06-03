import style from "./TodoItem.module.css";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

const TodoItem = ({ text, count, deleteTodo, id, handleEdit, isEditindg }) => {
  return (
    <div className={style.box}>
      <h3 className={style.todoCount}>TODO #{count}</h3>
      <h3 className={style.text}>{text}</h3>
      <button
        disabled={isEditindg}
        onClick={() => {
          deleteTodo(id);
        }}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        disabled={isEditindg}
        className={style.editButton}
        type="button"
        onClick={() => handleEdit({ text, id })}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoItem;
