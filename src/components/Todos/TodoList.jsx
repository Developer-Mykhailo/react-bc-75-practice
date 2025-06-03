import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = ({ todos, deleteTodo, handleEdit, isEditindg }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoItem
            isEditindg={isEditindg}
            handleEdit={handleEdit}
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
