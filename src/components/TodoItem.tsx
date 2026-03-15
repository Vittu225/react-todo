import React from 'react'
import type { Todo } from '../types'
import {useDispatch} from 'react-redux'
import {handlerDeleteTodo, toogleTodo} from '../Store/todoSlice'

interface TodoItemProps {
  todo: Todo,
  id: string
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, id }) => {
  const dispatch = useDispatch()
  return (
    <li className="todo-item">
      <label className="todo-item-main">
        <input 
          className="todo-checkbox"
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => dispatch(toogleTodo({id}))}
        />
        <span className="todo-text">{todo.name}</span>
      </label>
      <button 
        className="todo-delete-btn" 
        onClick={() => dispatch(handlerDeleteTodo({id}))}
      >
        Удалить
      </button>
    </li>
  )
}

export default TodoItem
