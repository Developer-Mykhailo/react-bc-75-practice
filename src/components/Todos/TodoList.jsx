import { useSelector } from "react-redux";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import TodoItem from "./TodoItem/TodoItem";
import { selectFilteredTodos } from "../../redux/selectors";

const TodoList = ({ isEditindg }) => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <Grid>
      {todos.map((todo, index) => (
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
