import {configureStore} from '@reduxjs/toolkit'
import todoReducres from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducres
})