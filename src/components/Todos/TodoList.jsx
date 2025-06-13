import { useSelector } from "react-redux";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = ({ isEditindg }) => {
  const todos = useSelector((state) => state.todos.items);
  const filter = useSelector((state) => state.filter.text);
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
