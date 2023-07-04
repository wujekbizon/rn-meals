import { StyleSheet, Text, View } from 'react-native'
const MealList = ({ listData }) => {
  return listData.map((item) => (
    <View style={styles.listContainer} key={item}>
      <Text style={styles.listItem}>{item}</Text>
    </View>
  ))
}
export default MealList
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#f1d7b5',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
  },
  listItem: {
    textAlign: 'center',
  },
})
