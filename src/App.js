import './App.css';
import { useState } from 'react';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }
  function deleteTodoHandler(index) {
    setTodos(todos.filter((_, inx) => inx !== index));
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
