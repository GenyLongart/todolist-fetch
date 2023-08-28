import React, { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import Todo from './Todo';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    getTodos();
  },[newTodo])

  const sendTodos = async (allTodos) => {
    const response = await fetch(
      'https://playground.4geeks.com/apis/fake/todos/user/GenyLongart',
      {
        method: "PUT",
        body: JSON.stringify(allTodos),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const addTodo = () => {
    console.log(newTodo)
      const task = {
        label: newTodo,
        done: false,
        id: newTodo
      };
      sendTodos([...todos, task]);
  };

  const getTodos = () => {
   fetch('https://playground.4geeks.com/apis/fake/todos/user/GenyLongart', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => response.json()) 
    .then((data) => setTodos(data))
    .catch(error => console.log(error.message))
  }

  
  const deleteTodo = (id) => {
    const newTodoList = todos.filter(todo => todo.id !== id)
    sendTodos(newTodoList)
    setTodos(newTodoList);
  };
  

  return (
    <>
      <h1>Todos</h1>
      <div className='TodoWrapper'>
        <TodoInput addTodo={addTodo} setNewTodo={setNewTodo} newTodo={newTodo}/>
        {todos !== null && todos !== undefined && todos.length > 0 ? (
          todos.map((todo, index) => (
            <Todo task={todo} key={index} deleteTodo={deleteTodo}/>
          ))
        ) : (
          <p>No hay tareas pendientes</p>
        )}
      </div>
    </>
  );
};

export default TodoContainer;