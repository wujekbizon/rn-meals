import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ids: [],
}

const mealsSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.ids.push(payload)
    },
    removeFavorite: (state, { payload }) => {
      state.ids = state.ids.filter((id) => id !== payload)
    },
  },
})

export const { addFavorite, removeFavorite } = mealsSlice.actions
export const mealsReducer = mealsSlice.reducer
