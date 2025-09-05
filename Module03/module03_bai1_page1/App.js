import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Flex = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'dodgerblue',  justifyContent: 'center',
            alignItems: 'center', }}>
        <Image
          style={{
            height: 130,
            width: 130,
           
          }}
          source={{
            uri: 'https://wallpapers.com/images/hd/simple-black-circle-outline-png-cyyqsr7wqett1tpg.jpg',
          }}
        />
      </View>

     <View style={{ flex: 1, backgroundColor: 'dodgerblue', justifyContent: 'center', alignItems: 'center' }}>
  <Text style={styles.boldText}>GROW</Text>
  <Text style={styles.boldText}>YOUR BUSINESS</Text>

  {/* Bordered subtitle container */}
  <View style={styles.subtitleBox}>
    <Text style={styles.subtitle}>
      We will help you to grow your business using online server
    </Text>
  </View>
</View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'dodgerblue',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={styles.button}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: 'yellow',
    height: 50,
    width: 100,
    borderRadius: 10,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
  },
  subtitleBox: {
    marginTop: 20,
    padding: 10,
    width: '90%',
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
  },
});

export default Flex;
