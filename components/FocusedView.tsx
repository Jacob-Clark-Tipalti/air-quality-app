 import { ScrollView, Text, StyleSheet } from 'react-native';

 export function FocusedView({
  value,
  rating,
  variable
 }: {
  value: number,
  rating: string,
  variable: string
 }) {
  return (
    <ScrollView contentContainerStyle={styles.view}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.rating}>{rating}</Text>
      <Text style={styles.variable}>{variable}</Text>
    </ScrollView>
  );
 }

 const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    top: 150,
  },
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
  variable: {
    color: 'black',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Inter',
  }
 });