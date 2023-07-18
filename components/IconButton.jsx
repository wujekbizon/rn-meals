import { StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const IconButton = ({ onPress, color, name }) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
      <Ionicons name={name} color={color} size={24} />
    </Pressable>
  )
}
export default IconButton
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
})
