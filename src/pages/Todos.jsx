import Container from "../components/Container/Container";
import Form from "../components/Todos/Form/Form";
import Section from "../components/Section/Section";
import TodoList from "../components/Todos/TodoList";
import SearchBox from "../components/Todos/SearchBox/SearchBox";
import EditForm from "../components/Todos/EditForm/EditForm";
import { useSelector } from "react-redux";

const Todos = () => {
  const currentTodo = useSelector((state) => state.todos.currentToDo);

  return (
    <Section>
      <Container>
        {currentTodo ? <EditForm text={currentTodo.text} /> : <Form />}
        <SearchBox />
        <TodoList isEditindg={Boolean(currentTodo)} />
      </Container>
    </Section>
  );
};

export default Todos;
