import { configureStore } from '@reduxjs/toolkit'
import passwordsReducer from './slices/passwordSlice'
import {saveState, loadState} from '../utilities/persistState'

export const store = configureStore({
  reducer: {
    passwords: passwordsReducer
  },
  preloadedState: loadState() 
})

store.subscribe(() => {
    saveState(store.getState());
  })