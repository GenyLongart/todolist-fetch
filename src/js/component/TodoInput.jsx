import React from 'react'

const TodoInput = ({ addTodo, setNewTodo}) => {
  const handleEnter = (e) => {
    
    if (e.code === 'Enter') {
      addTodo();
    }
  }
  return (
    <>
      <div className='TodoInput' onKeyUp={handleEnter}>
        <input type="text" id="" className='todo-input' placeholder='Qué tarea desea realizar?' onChange={(e) => setNewTodo(e.target.value)} />
      </div>
    </>
  )
}

export default TodoInput;