import Container from "../components/Container/Container";
import Form from "../components/Todos/Form/Form";
import Section from "../components/Section/Section";
import TodoList from "../components/Todos/TodoList";
import SearchBox from "../components/Todos/SearchBox/SearchBox";
import EditForm from "../components/Todos/EditForm/EditForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchToDos } from "../redux/operation";
import Loader from "../components/Loader/Loader";
import Heading from "../components/Heading/Heading";

const Todos = () => {
  const currentTodo = useSelector((state) => state.todos.currentToDo);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const isError = useSelector((state) => state.todos.isError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);
  return (
    <Section>
      <Container>
        {currentTodo ? (
          <EditForm text={currentTodo.text} id={currentTodo.id} />
        ) : (
          <Form />
        )}
        <SearchBox />
        {!isError && <TodoList isEditindg={Boolean(currentTodo)} />}
        {isLoading && <Loader />}
        {isError && (
          <Heading
            variant={"error"}
            title={`Something went wrong ! ${isError}.Please try again later`}
          />
        )}
      </Container>
    </Section>
  );
};

export default Todos;
