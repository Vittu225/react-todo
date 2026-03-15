import React from 'react'
import type { Todo } from '../types'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import type { RootState } from '../Store'


const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos)
 

  return (
    <div className='todo-list'>
      <h1 className="todo-title">Список дел</h1>
      <ul className="todo-list-items">
        {todos.map((item: Todo) => (
          <TodoItem 
            key={item.id}
            todo={item}
            id = {item.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
