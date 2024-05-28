import { StyleSheet, Text, View } from "react-native";

export function VariableItem({
  name,
  value,
  rating,
}: {
  name: string,
  value: number,
  rating: string,
}) {
  let statusBarColor;
  if (rating === 'Fair') {
    statusBarColor = '#50CCAA';
  } else if (rating === 'Medium') {
    statusBarColor = '#FDE68A';
  } else {
    statusBarColor = '#DC2626';
  }

  return (
    <View style={styles.container}>
      <View style={{...styles.statusBar, backgroundColor: statusBarColor}} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:7,
    backgroundColor: '#FFFFFF',
    height: 59,
    borderRadius: 8,
    width: '90%',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,
  },
  statusBar: {
    top: '80%',
    height: '20%',
    backgroundColor: 'green',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  name: {
    left: 20,
    height: 19,
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  value: {
    height: 34,
    width: 50,
    fontFamily: 'Lilita One',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 34,
  },
  textContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
