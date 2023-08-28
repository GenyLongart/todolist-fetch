import React from 'react'
import {BsFillTrashFill} from 'react-icons/bs';

const Todo = ({task, deleteTodo}) => {
  return (
    <div className='Todo'>
      <p>{task.task}</p>
      <div>
        <BsFillTrashFill onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo;