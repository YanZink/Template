import style from './TodoActions.module.css';
import Button from '../UI/Button';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

function TodoActions({
  resetTodos,
  deleteCompleatedTodos,
  compleatedTodosExist,
}) {
  return (
    <div className={style.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Compleated Todos"
        onClick={deleteCompleatedTodos}
        disabled={!compleatedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodoActions;
