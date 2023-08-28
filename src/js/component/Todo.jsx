import React from 'react'
import {BsFillTrashFill} from 'react-icons/bs';

const Todo = ({task, deleteTodo}) => {
  console.log(task)
  return (
    <div className='Todo'>
      <p>{task.label}</p>
      <div>
        <BsFillTrashFill onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo;