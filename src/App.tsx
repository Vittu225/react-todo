import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { useDispatch } from 'react-redux'
import { handlerAddTodo } from './Store/todoSlice'


function App() {
  const [text, setText] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const dispatch = useDispatch()
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim().length) {
      setError(false)
      dispatch(handlerAddTodo({ text }))
      setText('')
    } else {
      setError(true)
    }
  }

  return (
    <div className="app">
      <div className="app-card">
        <InputField 
          text={text}
          setText={setText}
          onSubmit={handleAddTodo}
          error={error}
        />
        <TodoList />
      </div>
    </div>
  )
}

export default App
