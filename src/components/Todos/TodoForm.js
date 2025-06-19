import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');
  const handleInput = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    onAddTodo(inputValue);
    setInputValue('');
    console.log('Отправленные данные:', inputValue);
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={handleInput}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
