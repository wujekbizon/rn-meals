import { StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

// components
import { LayoutWrapper, CategoryGridTile } from '../components'

const CategoriesScreen = ({ navigation }) => {
  const handlePress = (id) => {
    navigation.navigate('MealsOverview', {
      categoryId: id,
    })
  }

  return (
    <LayoutWrapper>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => <CategoryGridTile item={item} onPress={() => handlePress(item.id)} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </LayoutWrapper>
  )
}
export default CategoriesScreen

const styles = StyleSheet.create({})
