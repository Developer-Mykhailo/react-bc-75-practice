import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import Form from "../components/Form/Form";
import Section from "../components/Section/Section";
import { nanoid } from "nanoid";
import TodoList from "../components/Todos/TodoList";
import SearchBox from "../components/Todos/SearchBox/SearchBox";
import EditForm from "../components/Todos/EditForm/EditForm";

const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filter, setFilter] = useState("");

  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const todo = { text, id: nanoid() };
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setCurrentTodo(todo);
  };

  const handleChangeFilter = (text) => {
    setFilter(text);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  const cancelUpdateTodo = () => {
    setCurrentTodo(null);
  };

  const updateTodo = (text) => {
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodo.id ? { ...currentTodo, text } : todo
      )
    );
    cancelUpdateTodo();
  };

  return (
    <Section>
      <Container>
        {currentTodo ? (
          <EditForm
            cancelUpdateTodo={cancelUpdateTodo}
            updateTodo={updateTodo}
            text={currentTodo.text}
          />
        ) : (
          <Form onSubmit={addTodo} />
        )}
        <SearchBox handleChangeFilter={handleChangeFilter} />
        <TodoList
          isEditindg={Boolean(currentTodo)}
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
        />
      </Container>
    </Section>
  );
};

export default Todos;
