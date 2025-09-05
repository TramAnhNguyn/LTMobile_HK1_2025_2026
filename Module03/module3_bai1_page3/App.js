import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <LinearGradient colors={['white', 'deepskyblue']} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
        <Image source={require('./assets/pngtree-vector-lock-icon-png-image_318067.jpg')}
        style={styles.lock_img}
        />
        <Text style={styles.title}> FORGET PASSWORD</Text>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent:'center', marginTop:-50 }}>
        <Text style={styles.text}>
          {' '}
          Provide your account's email for which you want to reset your password
        </Text>

        <View style={styles.container}>
          <Image
            source={require('./assets/email_icon.png')}
            style={styles.image}
          />
          <TextInput style={styles.textInput} placeholder='       Email' />
        </View>
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <TouchableOpacity style={styles.button}>NEXT</TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  lock_img:{
    height:100,
    width:100,
    marginBottom:10,

  },
  title: {
    fontWeight: 'bold',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:100,
    paddingRight:100,
    fontSize: 20,
  },
  text: {
    fontSize: 14,
    padding: 15,
  },
  container: {
    flexDirection:'row'
  },
  textInput: {
    height: 40,
    width: 300,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  button: {
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'yellow',
    height: 40,
    width: 300,
  },
  image: {
    height: 20,
    width: 20,
    marginRight: -30,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default App;
