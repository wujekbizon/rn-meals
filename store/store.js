import { configureStore } from '@reduxjs/toolkit'
import { mealsReducer } from './slices/meals'

export const store = configureStore({
  reducer: {
    favoriteMeals: mealsReducer,
  },
})
