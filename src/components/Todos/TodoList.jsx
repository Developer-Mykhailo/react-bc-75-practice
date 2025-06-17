import { useSelector } from "react-redux";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import TodoItem from "./TodoItem/TodoItem";
import { selectFilter, selectTodos } from "../../redux/selectors";

const TodoList = ({ isEditindg }) => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Grid>
      {filteredTodos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoItem
            isEditindg={isEditindg}
            text={todo.text}
            count={index + 1}
            id={todo.id}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
