import React, { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import Todo from './Todo';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    getTodos();
  },[])

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
      };
      sendTodos([...todos, task]);
      setNewTodo('');
  };

  const getTodos = () => {
   fetch('https://playground.4geeks.com/apis/fake/todos/user/GenyLongart', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => response.json()) 
    .then((data) => setTodos(data))
    .catch(error => console.log(error.message))
    
/*
    fetch('https://playground.4geeks.com/apis/fake/todos/user/alesanchezr', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
    })
    .catch(error => {
        //manejo de errores
        console.log(error);
    });*/

  }

  /*
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  */

  return (
    <>
      <h1>Todos</h1>
      <div className='TodoWrapper'>
        <TodoInput addTodo={addTodo} setNewTodo={setNewTodo}/>
        {todos !== null && todos !== undefined && todos.length > 0 ? (
          todos.map((todo, index) => (
            <Todo task={todo} key={index}/>
          ))
        ) : (
          <p>No hay tareas pendientes</p>
        )}
      </div>
    </>
  );
};

export default TodoContainer;