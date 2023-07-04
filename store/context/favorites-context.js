import { createContext, useState } from 'react'

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
})

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([])

  const addFavorite = (mealId) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, mealId])
  }

  const removeFavorite = (mealId) => {
    setFavoriteMealIds((currentFavIds) => currentFavIds.filter((id) => id !== mealId))
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  }
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider
