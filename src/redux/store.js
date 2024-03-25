import { configureStore } from '@reduxjs/toolkit'
import passwordsReducer from './slices/passwordSlice'

export const store = configureStore({
  reducer: {
    passwords: passwordsReducer
  },
})