import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import Form from "../components/Form/Form";
import Section from "../components/Section/Section";
import { nanoid } from "nanoid";
import TodoList from "../components/Todos/TodoList";
import SearchBox from "../components/Todos/SearchBox/SearchBox";

const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filter, setFilter] = useState("");

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

  const handleChangeFilter = (text) => {
    setFilter(text);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Section>
      <Container>
        <Form onSubmit={addTodo} />
        <SearchBox handleChangeFilter={handleChangeFilter} />
        <TodoList todos={filteredTodos} deleteTodo={deleteTodo} />
      </Container>
    </Section>
  );
};

export default Todos;
