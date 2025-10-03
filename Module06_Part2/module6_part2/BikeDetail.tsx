import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import react from 'react';

function BikeDetail(){
  return(
    <View style={styles.container}>
      <View>
        <Text>Pina Mountain</Text>
        <Text>15% OFF </Text>
      </View>

      <View></View>

      <View>
      <Text>Description</Text>
      <Text style={styles.text}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, email,etc</Text>
      </View>

      <View>
      <Image source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/7751e8ae38ead6786432f93ed2004699'}}/>
        <TouchableOpacity style={{borderRadius:8, justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white', backgroundColor:'red'}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    padding:5

  }
})

export default BikeDetail;