import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from '../components/DrawerNavigator'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import { MealsScreen, MealDetailScreen } from '../screens'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'black' },
          animation: 'fade_from_bottom',
        }}
      >
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsScreen}
          options={({ route }) => {
            const { categoryId } = route.params
            const { title } = CATEGORIES.find((category) => category.id === categoryId)

            return {
              title: title,
            }
          }}
        />
        <Stack.Screen
          name="MealDetailScreen"
          component={MealDetailScreen}
          options={({ route }) => {
            const { mealId } = route.params
            const { title } = MEALS.find((meal) => meal.id === mealId)
            return {
              title: title,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation
