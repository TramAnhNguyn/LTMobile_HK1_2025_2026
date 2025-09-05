import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Flex = () => {
  return (
    <LinearGradient colors={['white', 'deepskyblue']} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.boldText}>GROW</Text>
        <Text style={styles.boldText}>YOUR BUSINESS</Text>

        <View style={styles.subtitleBox}>
          <Text style={styles.subtitle}>
            We will help you to grow your business using online server
          </Text>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.howWeWork}>HOW WE WORK?</Text>
      </View>
    </LinearGradient>
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
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
  },
  howWeWork: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});

export default Flex;
