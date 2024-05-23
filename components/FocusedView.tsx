 import { ScrollView, Text, StyleSheet } from 'react-native';

 export function FocusedView({
  value,
  rating,
  name
 }: {
  value: number,
  rating: string,
  name: string
 }) {
  return (
    <>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.rating}>{rating}</Text>
      <Text style={styles.name}>{name}</Text>
    </>
  );
 }

 const styles = StyleSheet.create({
  value: {
    color: '#50CCAA',
    fontWeight: '900',
    fontSize: 140,
    lineHeight: 160,
    fontFamily: 'Lilita One',
  },
  rating: {
    color: '#50CCAA',
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 48,
    fontFamily: 'Inter',
  },
  name: {
    color: 'black',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Inter',
  }
 });