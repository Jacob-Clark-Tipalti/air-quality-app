import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { router} from "expo-router";

export function VariableItem({
  name,
  value,
  rating,
}: {
  name: string,
  value?: number,
  rating?: string,
}) {
  let statusBarColor;
  if (rating === 'Fair') {
    statusBarColor = '#50CCAA';
  } else if (rating === 'Medium') {
    statusBarColor = '#FDBA74';
  } else {
    statusBarColor = '#DC2626';
  }

  return (

    <Pressable style={styles.pressable} onPress={() => {
      router.push("/graph")}}> 
      <View style={styles.container}>
        <View style={{...styles.statusBar, backgroundColor: statusBarColor}} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable:{

  },
  container: {
    margin:7,
    backgroundColor: '#FFFFFF',
    height: 59,
    borderRadius: 8,
    width: '95%',
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
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 16,
  },
  value: {
    width: 50,
    fontFamily: 'Lilita One',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 34,
    textAlign: 'right',
  },
  textContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 15
  },
});
