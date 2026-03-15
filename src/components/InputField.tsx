import React from 'react'

interface InputFieldProps {
  text: string
  setText: (text: string) => void
  onSubmit: (e: React.FormEvent) => void
  error: boolean
}

const InputField: React.FC<InputFieldProps> = ({ text, setText, onSubmit, error }) => {
  return (
    <>
      <form className="todo-form" onSubmit={onSubmit}>
        <label className="todo-form-label" htmlFor="todo">
          <input 
            className="todo-input"
            type="text" 
            id="todo"
            placeholder="Что нужно сделать?"
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
        </label>
        <button className="todo-add-btn">Добавить</button>
      </form>
      {error && <p className="todo-error">Введите какой‑нибудь текст</p>}
    </>
  )
}

export default InputField
