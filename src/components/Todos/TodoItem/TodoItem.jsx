import { useDispatch } from "react-redux";
import style from "./TodoItem.module.css";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import { setCurrentToDo } from "../../../redux/todoSlice";
import { deleteToDos } from "../../../redux/operation";

const TodoItem = ({ text, count, id, isEditindg }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.box}>
      <h3 className={style.todoCount}>TODO #{count}</h3>
      <h3 className={style.text}>{text}</h3>
      <button
        disabled={isEditindg}
        onClick={() => {
          dispatch(deleteToDos(id));
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
        onClick={() => dispatch(setCurrentToDo({ text, id }))}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoItem;
