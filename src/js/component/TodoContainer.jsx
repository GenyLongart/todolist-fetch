import React, { useState } from 'react';
import TodoInput from './TodoInput';
import Todo from './Todo';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: todo, task: todo, completed: false, editing: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <h1>Todos</h1>
      <div className='TodoWrapper'>
        <TodoInput addTodo={addTodo} />
        {todos !== null && todos !== undefined && todos.length > 0 ? (
          todos.map((todo, index) => (
            <Todo task={todo} key={index} deleteTodo={deleteTodo} />
          ))
        ) : (
          <p>No hay tareas pendientes</p>
        )}
      </div>
    </>
  );
};

export default TodoContainer;