import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoState } from '../types'

const initialState: TodoState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    handlerAddTodo(state, action: PayloadAction<{ text: string }>) {
      if (action.payload.text.trim().length) {
        state.todos.push({
          id: crypto.randomUUID(),
          name: action.payload.text,
          completed: false
        })
      }
    },
    handlerDeleteTodo(state, action: PayloadAction<{ id: string }>) {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id)
    },
    toogleTodo(state, action: PayloadAction<{ id: string }>) {
      const todo = state.todos.find((item) => item.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  }
})

export const { handlerAddTodo, handlerDeleteTodo, toogleTodo } = todoSlice.actions
export default todoSlice.reducer

