import { StyleSheet, View, Text } from 'react-native'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { FavoritesContext } from '../store/context/favorites-context'
import { LayoutWrapper, MealsList } from '../components'
import { MEALS } from '../data/dummy-data'

const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext)
  const { ids } = useSelector((state) => state.favoriteMeals)

  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id))

  return (
    <LayoutWrapper colors={['#ae67fa', '#2c1a3f']}>
      <View style={styles.container}>
        {favoriteMeals.length === 0 ? (
          <Text style={styles.text}>You have no favorite meals yet.</Text>
        ) : (
          <MealsList items={favoriteMeals} />
        )}
      </View>
    </LayoutWrapper>
  )
}
export default FavoritesScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
})
