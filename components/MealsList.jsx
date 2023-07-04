import { StyleSheet, FlatList } from 'react-native'
import MealCard from './MealCard'
import { useNavigation } from '@react-navigation/native'

const MealsList = ({ items }) => {
  const navigation = useNavigation()

  const handlePress = (id) => {
    navigation.navigate('MealDetailScreen', {
      mealId: id,
    })
  }
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MealCard item={item} onPress={() => handlePress(item.id)} />}
    />
  )
}
export default MealsList
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
