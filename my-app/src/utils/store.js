import listReducer from '../features/list'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    list: listReducer,
  },
})