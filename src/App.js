import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

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

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
