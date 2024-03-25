import { configureStore } from '@reduxjs/toolkit'
import passwordsReducer from './slices/passwordSlice'
import todoReducer from './slices/todoSlice'
import {saveState, loadState} from '../utilities/persistState'

export const store = configureStore({
  reducer: {
    passwords: passwordsReducer,
    todos: todoReducer
  },
  preloadedState: loadState() 
})

store.subscribe(() => {
    saveState(store.getState());
  })