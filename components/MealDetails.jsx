import { StyleSheet, View, Text } from 'react-native'

const MealDetails = ({ duration, complexity, affordability, style }) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={[styles.details, style]}>{`${duration}m`}</Text>
      <Text style={[styles.details, style]}>#{complexity}</Text>
      <Text style={[styles.details, style]}>#{affordability}</Text>
    </View>
  )
}
export default MealDetails

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    fontSize: 13,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 8,
    textTransform: 'uppercase',
  },
})
