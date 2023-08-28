import React, { useState } from 'react'

const TodoInput = ({ addTodo }) => {
  const [value, setvalue] = useState('');

  const handleEnter = (e) => {
    if (e.code === 'Enter') {
      addTodo(value);
      setvalue('');
    }
  }
  return (
    <>
      <div className='TodoInput' onKeyUp={handleEnter}>
        <input type="text" value={value} id="" className='todo-input' placeholder='Qué tarea desea realizar?'
          onChange={(e) => setvalue(e.target.value)} />
      </div>
    </>
  )
}

export default TodoInput;