import { useLayoutEffect, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, View, Text, ScrollView, Image, useWindowDimensions } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { MEALS } from '../data/dummy-data'
import { LayoutWrapper, MealDetails, Subtitle, MealList, IconButton } from '../components'
import { FavoritesContext } from '../store/context/favorites-context'
import { addFavorite, removeFavorite } from '../store/slices/meals'

const MealDetailScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext)
  const dispatch = useDispatch()
  const { ids } = useSelector((state) => state.favoriteMeals)
  // const { ids, addFavorite, removeFavorite } = favoriteMealsCtx
  const { height } = useWindowDimensions()
  const route = useRoute()
  const navigation = useNavigation()
  const { mealId } = route.params

  const mealIsFavorite = ids.includes(mealId)

  const { title, imageUrl, ingredients, steps, affordability, duration, complexity } = MEALS.find(
    (item) => item.id === mealId
  )

  const imageHeight = {
    height: height / 2,
  }

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite(mealId))
    } else {
      dispatch(addFavorite(mealId))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            color="white"
            name={mealIsFavorite ? 'star' : 'star-outline'}
          />
        )
      },
    })
  }, [navigation, changeFavoriteStatusHandler])

  return (
    <LayoutWrapper>
      <ScrollView style={styles.screen}>
        <Image source={{ uri: imageUrl }} style={[styles.image, imageHeight]} />
        <Text style={styles.title}>{title}</Text>
        <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
        <View style={styles.container}>
          <View style={styles.listsContainer}>
            <Subtitle>Ingredients</Subtitle>
            <MealList listData={ingredients} />
            <Subtitle>Steps</Subtitle>
            <MealList listData={steps} />
          </View>
        </View>
      </ScrollView>
    </LayoutWrapper>
  )
}
export default MealDetailScreen

const styles = StyleSheet.create({
  screen: { marginBottom: 16 },
  container: {
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  listsContainer: {
    width: '80%',
  },
  details: {
    fontSize: 13,
    color: 'white',
    marginHorizontal: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
    margin: 8,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
})
