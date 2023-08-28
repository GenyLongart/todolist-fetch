import React from 'react'

const TodoInput = ({ addTodo, setNewTodo, newTodo}) => {
  const handleEnter = (e) => {
    if (e.code === 'Enter') {
      addTodo();
      setNewTodo('')
    }
  }
  return (
    <>
      <div className='TodoInput' onKeyUp={handleEnter}>
        <input type="text" id="" value={newTodo} className='todo-input' placeholder='Qué tarea desea realizar?' onChange={(e) => setNewTodo(e.target.value)} />
      </div>
    </>
  )
}

export default TodoInput;