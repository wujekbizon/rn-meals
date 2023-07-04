import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const LayoutWrapper = ({ children, colors, style }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0.3 }}
      end={{ x: 1, y: 0.5 }}
      style={[styles.rootScreen, style]}
      colors={colors ?? ['#434343', '#000000']}
    >
      {children}
    </LinearGradient>
  )
}
export default LayoutWrapper

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
})
