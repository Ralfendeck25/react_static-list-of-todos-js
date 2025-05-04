import TodoInfo from '../TodoInfo/TodoInfo';

const TodoList = ({ todos }) => (
  <section className="TodoList" data-cy="TodoList">
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);

export default TodoList;
