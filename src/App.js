import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodoActions from './components/Todos/TodoActions';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodo = {
      text: text,
      isCompleated: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  }
  function deleteTodoHandler(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function toggleTodoHandler(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleated: !todo.isCompleated }
          : { ...todo }
      )
    );
  }

  function resetTodosHandler() {
    setTodos([]);
  }

  function deleteCompleatedTodosHandler() {
    setTodos(todos.filter((todo) => !todo.isCompleated));
  }

  const compleatedTodosCount = todos.filter((todo) => todo.isCompleated).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onAddTodo={addTodo} />
      {!!todos.length && (
        <TodoActions
          compleatedTodosExist={!!compleatedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompleatedTodos={deleteCompleatedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!compleatedTodosCount && (
        <h2>{`You have compleated ${compleatedTodosCount} ${
          compleatedTodosCount > 1 ? 'todos' : 'todo'
        }!`}</h2>
      )}
    </div>
  );
}

export default App;
