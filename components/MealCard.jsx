import { StyleSheet, View, Text, useWindowDimensions, Image, Pressable, Platform } from 'react-native'

import MealDetails from './MealDetails'

const MealCard = ({ item, onPress }) => {
  const { imageUrl, title, complexity, affordability, duration } = item
  const { width } = useWindowDimensions()
  const gapSize = 20
  const mealCardWidth = width - gapSize

  const mealCardLayout = {
    width: mealCardWidth - gapSize * 2,
    height: mealCardWidth - gapSize * 2,
    marginVertical: gapSize,
  }

  return (
    <View style={[styles.mealContainer, mealCardLayout]}>
      <Pressable
        style={({ pressed }) => [styles.btn, Platform.OS === 'ios' && pressed && styles.btnPressed]}
        onPress={onPress}
        android_ripple={{ color: '#F5DEB3' }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <MealDetails
          complexity={complexity}
          affordability={affordability}
          duration={duration}
          style={{ color: '#434343' }}
        />
      </Pressable>
    </View>
  )
}
export default MealCard

const styles = StyleSheet.create({
  mealContainer: {
    flex: 1,
    backgroundColor: '#FAEBD7',
    borderRadius: 10,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 4,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  imageContainer: {
    flex: 4,
  },
  btn: {
    flex: 1,
  },
  btnPressed: {
    opacity: 0.3,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    paddingTop: 5,
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
})
