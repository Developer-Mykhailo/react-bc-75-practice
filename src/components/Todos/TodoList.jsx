import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoItem
            text={todo.text}
            count={index + 1}
            deleteTodo={deleteTodo}
            id={todo.id}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
