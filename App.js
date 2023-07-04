import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { store } from './store/store'
import { Provider } from 'react-redux'
import FavoritesContextProvider from './store/context/favorites-context'
import Navigation from './navigation/Navigation'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <Navigation />
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
