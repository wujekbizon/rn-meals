import { StyleSheet, Text, View } from 'react-native'

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}
export default Subtitle
const styles = StyleSheet.create({
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: '#f1d7b5',
    borderBottomWidth: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#f1d7b5',
    fontWeight: '700',
    textAlign: 'center',
  },
})
