import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

function HomeScreen(){
const data = [
  {
    id:1,
    name: 'Apple',
    price: 5
  },
  {
    id:2,
    name: 'Banana',
    price: 8
  },
  {
    id:3,
    name: 'Strawberry',
    price: 4
  },
  {
    id:4,
    name: 'Peach',
    price: 9
  },
];

  return(
    <View style={styles.container}>
    </View>

  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
