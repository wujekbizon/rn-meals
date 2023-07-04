import { useWindowDimensions } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CategoriesScreen, FavoritesScreen } from '../screens'
import { Ionicons } from '@expo/vector-icons'
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions()

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'black' },
        animation: 'fade_from_bottom',
        drawerContentStyle: { backgroundColor: '#434343' },
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="list" />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="star" />,
          headerStyle: { backgroundColor: '#2c1a3f' },
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
