import { configureStore } from '@reduxjs/toolkit'
import page from './page'


export const store = configureStore({
  reducer: { page }
})