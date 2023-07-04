import { StyleSheet, View, Pressable, Text, useWindowDimensions, Platform } from 'react-native'

const CategoryGridTile = ({ item, onPress }) => {
  const { title, color, shadowColor } = item
  const { width, height } = useWindowDimensions()

  const tileWidth = width / 2
  const gapSize = 15

  const categoryItem = {
    backgroundColor: color,
    width: tileWidth - gapSize,
    height: tileWidth - gapSize,
    marginVertical: gapSize / 2,
    marginHorizontal: gapSize / 2,
  }

  return (
    <View style={[styles.gridItemContainer, categoryItem]}>
      <Pressable
        android_ripple={{ color: shadowColor }}
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}
export default CategoryGridTile

const styles = StyleSheet.create({
  gridItemContainer: {
    flex: 1,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  btn: {
    flex: 1,
  },
  btnPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
})
