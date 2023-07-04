import { StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { MEALS } from '../data/dummy-data'

import { LayoutWrapper, MealsList } from '../components'

const MealsScreen = () => {
  const route = useRoute()
  const { categoryId } = route.params
  const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.includes(categoryId))

  return (
    <LayoutWrapper style={styles.wrapper}>
      <MealsList items={displayedMeals} />
    </LayoutWrapper>
  )
}
export default MealsScreen

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
})
