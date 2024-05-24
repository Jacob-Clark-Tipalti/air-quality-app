import { View, Text, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  headerView: {
    width: 170,
    height: 18,
    top: 38,
    left: 175,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 15,
    lineHeight: 18.15,
    fontWeight: 400,
    fontFamily: 'inter',
  },
  locationIcon: {
    width: 17,
    height: 17,
    left: 6
  }
})

export function Header({ location }: { location: string }) {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{location}</Text>
      <Image 
        style={styles.locationIcon}
        source={require('../assets/images/location.png')} 
      />
    </View>
  );
}